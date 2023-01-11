import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urldispatchrule as shared_urldispatchrule
from ..shared import featuresettings as shared_featuresettings
from ..shared import identityawareproxy as shared_identityawareproxy

class ApplicationDatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    CLOUD_DATASTORE = "CLOUD_DATASTORE"
    CLOUD_FIRESTORE = "CLOUD_FIRESTORE"
    CLOUD_DATASTORE_COMPATIBILITY = "CLOUD_DATASTORE_COMPATIBILITY"

class ApplicationServingStatusEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SERVING = "SERVING"
    USER_DISABLED = "USER_DISABLED"
    SYSTEM_DISABLED = "SYSTEM_DISABLED"


@dataclass_json
@dataclasses.dataclass
class Application:
    r"""Application
    An Application resource contains the top-level configuration of an App Engine application.
    """
    
    auth_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDomain') }})
    code_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeBucket') }})
    database_type: Optional[ApplicationDatabaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    default_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultBucket') }})
    default_cookie_expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCookieExpiration') }})
    default_hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHostname') }})
    dispatch_rules: Optional[list[shared_urldispatchrule.URLDispatchRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchRules') }})
    feature_settings: Optional[shared_featuresettings.FeatureSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureSettings') }})
    gcr_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcrDomain') }})
    iap: Optional[shared_identityawareproxy.IdentityAwareProxy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iap') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    serving_status: Optional[ApplicationServingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingStatus') }})
    
