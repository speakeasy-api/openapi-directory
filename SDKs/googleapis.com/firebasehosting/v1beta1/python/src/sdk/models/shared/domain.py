import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainredirect as shared_domainredirect
from ..shared import domainprovisioning as shared_domainprovisioning

class DomainStatusEnum(str, Enum):
    DOMAIN_STATUS_UNSPECIFIED = "DOMAIN_STATUS_UNSPECIFIED"
    DOMAIN_CHANGE_PENDING = "DOMAIN_CHANGE_PENDING"
    DOMAIN_ACTIVE = "DOMAIN_ACTIVE"
    DOMAIN_VERIFICATION_REQUIRED = "DOMAIN_VERIFICATION_REQUIRED"
    DOMAIN_VERIFICATION_LOST = "DOMAIN_VERIFICATION_LOST"


@dataclass_json
@dataclasses.dataclass
class Domain:
    r"""Domain
    The intended behavior and status information of a domain.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_redirect: Optional[shared_domainredirect.DomainRedirect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainRedirect') }})
    provisioning: Optional[shared_domainprovisioning.DomainProvisioning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioning') }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[DomainStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
