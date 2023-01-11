import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptiondefinition as shared_subscriptiondefinition


@dataclass_json
@dataclasses.dataclass
class SubscriptionDefinitionsResponse:
    r"""SubscriptionDefinitionsResponse
    A collection of subscription definitions for the portal.
    """
    
    subscription_definitions: list[shared_subscriptiondefinition.SubscriptionDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionDefinitions') }})
    
