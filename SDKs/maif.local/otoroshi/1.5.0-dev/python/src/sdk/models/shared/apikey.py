import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIKey:
    r"""APIKey
    An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
    """
    
    authorized_entities: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedEntities') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    daily_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyQuota') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    monthly_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyQuota') }})
    throttling_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    
