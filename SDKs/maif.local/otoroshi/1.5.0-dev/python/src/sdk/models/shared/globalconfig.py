import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook
from ..shared import auth0config as shared_auth0config
from ..shared import cleversettings as shared_cleversettings
from ..shared import elasticconfig as shared_elasticconfig
from ..shared import ipfiltering as shared_ipfiltering
from ..shared import mailersettings as shared_mailersettings


@dataclass_json
@dataclasses.dataclass
class GlobalConfig:
    r"""GlobalConfig
    The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
    """
    
    alerts_emails: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertsEmails') }})
    alerts_webhooks: list[shared_webhook.Webhook] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertsWebhooks') }})
    analytics_webhooks: list[shared_webhook.Webhook] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsWebhooks') }})
    api_read_only: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiReadOnly') }})
    auto_link_to_default_group: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoLinkToDefaultGroup') }})
    endless_ip_addresses: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endlessIpAddresses') }})
    ip_filtering: shared_ipfiltering.IPFiltering = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipFiltering') }})
    limit_concurrent_requests: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitConcurrentRequests') }})
    max_concurrent_requests: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentRequests') }})
    per_ip_throttling_quota: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('perIpThrottlingQuota') }})
    stream_entity_only: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamEntityOnly') }})
    throttling_quota: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    u2f_login_only: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('u2fLoginOnly') }})
    use_circuit_breakers: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCircuitBreakers') }})
    backoffice_auth0_config: Optional[shared_auth0config.Auth0Config] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backofficeAuth0Config') }})
    clever_settings: Optional[shared_cleversettings.CleverSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleverSettings') }})
    elastic_reads_config: Optional[shared_elasticconfig.ElasticConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticReadsConfig') }})
    elastic_writes_configs: Optional[list[shared_elasticconfig.ElasticConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticWritesConfigs') }})
    lines: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    mailer_settings: Optional[shared_mailersettings.MailerSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailerSettings') }})
    max_http10_response_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHttp10ResponseSize') }})
    max_logs_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLogsSize') }})
    middle_fingers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleFingers') }})
    private_apps_auth0_config: Optional[shared_auth0config.Auth0Config] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAppsAuth0Config') }})
    
