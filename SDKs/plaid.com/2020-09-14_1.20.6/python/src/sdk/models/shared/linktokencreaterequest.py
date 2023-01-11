import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linktokencreaterequestauth as shared_linktokencreaterequestauth
from ..shared import countrycode_enum as shared_countrycode_enum
from ..shared import linktokencreaterequestdepositswitch as shared_linktokencreaterequestdepositswitch
from ..shared import linktokeneuconfig as shared_linktokeneuconfig
from ..shared import linktokencreaterequestincomeverification as shared_linktokencreaterequestincomeverification
from ..shared import linktokencreaterequestpaymentinitiation as shared_linktokencreaterequestpaymentinitiation
from ..shared import products_enum as shared_products_enum
from ..shared import linktokencreaterequestuser as shared_linktokencreaterequestuser


@dataclass_json
@dataclasses.dataclass
class LinkTokenCreateRequest:
    r"""LinkTokenCreateRequest
    LinkTokenCreateRequest defines the request schema for `/link/token/create`
    """
    
    client_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_name') }})
    country_codes: list[shared_countrycode_enum.CountryCodeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    user: shared_linktokencreaterequestuser.LinkTokenCreateRequestUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    account_filters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_filters') }})
    android_package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('android_package_name') }})
    auth: Optional[shared_linktokencreaterequestauth.LinkTokenCreateRequestAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    deposit_switch: Optional[shared_linktokencreaterequestdepositswitch.LinkTokenCreateRequestDepositSwitch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit_switch') }})
    eu_config: Optional[shared_linktokeneuconfig.LinkTokenEuConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu_config') }})
    income_verification: Optional[shared_linktokencreaterequestincomeverification.LinkTokenCreateRequestIncomeVerification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification') }})
    institution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    link_customization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_customization_name') }})
    payment_initiation: Optional[shared_linktokencreaterequestpaymentinitiation.LinkTokenCreateRequestPaymentInitiation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_initiation') }})
    products: Optional[list[shared_products_enum.ProductsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
