import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configuration_webhook_enum_method_enum as shared_configuration_webhook_enum_method_enum
from ..shared import configuration_webhook_enum_target_enum as shared_configuration_webhook_enum_target_enum


@dataclass_json
@dataclasses.dataclass
class ConversationsV1ConfigurationConfigurationWebhook:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    method: Optional[shared_configuration_webhook_enum_method_enum.ConfigurationWebhookEnumMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    post_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_webhook_url') }})
    pre_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pre_webhook_url') }})
    target: Optional[shared_configuration_webhook_enum_target_enum.ConfigurationWebhookEnumTargetEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
