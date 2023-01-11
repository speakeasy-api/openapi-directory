

import requests
from sdk.models import shared
from . import utils

from .apps_find_and_modify_apps import AppsFindAndModifyApps
from .custom_gateway_process_payments_and_refunds import CustomGatewayProcessPaymentsAndRefunds
from .developeraccounts_find_and_modify_developer_accounts import DeveloperAccountsFindAndModifyDeveloperAccounts
from .developers_find_and_modify_developers import DevelopersFindAndModifyDevelopers
from .events_find_events import EventsFindEvents
from .files_upload_files import FilesUploadFiles
from .markets_this_marketplace import MarketsThisMarketplace
from .ownership_find_ownership import OwnershipFindOwnership
from .permission_add_and_remove_permissions import PermissionAddAndRemovePermissions
from .reviews_find_and_modify_reviews import ReviewsFindAndModifyReviews
from .stats_find_marketplace_statistics import StatsFindMarketplaceStatistics
from .stripe_gateway_process_payments_and_refunds import StripeGatewayProcessPaymentsAndRefunds
from .transactions_find_payments_and_refunds import TransactionsFindPaymentsAndRefunds
from .useraccounts_find_and_modify_user_accounts import UserAccountsFindAndModifyUserAccounts
from .users_find_and_modify_users import UsersFindAndModifyUsers


SERVERS = [
	"https://market.openchannel.io/v2",
]


class SDK:
    
    apps_find_and_modify_apps: AppsFindAndModifyApps
    custom_gateway_process_payments_and_refunds: CustomGatewayProcessPaymentsAndRefunds
    developer_accounts_find_and_modify_developer_accounts: DeveloperAccountsFindAndModifyDeveloperAccounts
    developers_find_and_modify_developers: DevelopersFindAndModifyDevelopers
    events_find_events: EventsFindEvents
    files_upload_files: FilesUploadFiles
    markets_this_marketplace: MarketsThisMarketplace
    ownership_find_ownership: OwnershipFindOwnership
    permission_add_and_remove_permissions: PermissionAddAndRemovePermissions
    reviews_find_and_modify_reviews: ReviewsFindAndModifyReviews
    stats_find_marketplace_statistics: StatsFindMarketplaceStatistics
    stripe_gateway_process_payments_and_refunds: StripeGatewayProcessPaymentsAndRefunds
    transactions_find_payments_and_refunds: TransactionsFindPaymentsAndRefunds
    user_accounts_find_and_modify_user_accounts: UserAccountsFindAndModifyUserAccounts
    users_find_and_modify_users: UsersFindAndModifyUsers

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.apps_find_and_modify_apps = AppsFindAndModifyApps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_gateway_process_payments_and_refunds = CustomGatewayProcessPaymentsAndRefunds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.developer_accounts_find_and_modify_developer_accounts = DeveloperAccountsFindAndModifyDeveloperAccounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.developers_find_and_modify_developers = DevelopersFindAndModifyDevelopers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.events_find_events = EventsFindEvents(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.files_upload_files = FilesUploadFiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.markets_this_marketplace = MarketsThisMarketplace(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ownership_find_ownership = OwnershipFindOwnership(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.permission_add_and_remove_permissions = PermissionAddAndRemovePermissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.reviews_find_and_modify_reviews = ReviewsFindAndModifyReviews(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stats_find_marketplace_statistics = StatsFindMarketplaceStatistics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stripe_gateway_process_payments_and_refunds = StripeGatewayProcessPaymentsAndRefunds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.transactions_find_payments_and_refunds = TransactionsFindPaymentsAndRefunds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_accounts_find_and_modify_user_accounts = UserAccountsFindAndModifyUserAccounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_find_and_modify_users = UsersFindAndModifyUsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    