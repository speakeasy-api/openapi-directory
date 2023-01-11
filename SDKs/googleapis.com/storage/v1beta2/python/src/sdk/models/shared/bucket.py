import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketaccesscontrol as shared_bucketaccesscontrol
from ..shared import objectaccesscontrol as shared_objectaccesscontrol


@dataclass_json
@dataclasses.dataclass
class BucketCors:
    max_age_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAgeSeconds') }})
    method: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    origin: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    response_header: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeader') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycleRuleAction:
    r"""BucketLifecycleRuleAction
    The action to take.
    """
    
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycleRuleCondition:
    r"""BucketLifecycleRuleCondition
    The condition(s) under which the action will be taken.
    """
    
    age: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    created_before: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBefore'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_live: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLive') }})
    num_newer_versions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNewerVersions') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycleRule:
    action: Optional[BucketLifecycleRuleAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    condition: Optional[BucketLifecycleRuleCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycle:
    r"""BucketLifecycle
    The bucket's lifecycle configuration. See object lifecycle management for more information.
    """
    
    rule: Optional[list[BucketLifecycleRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLogging:
    r"""BucketLogging
    The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
    """
    
    log_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logBucket') }})
    log_object_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logObjectPrefix') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketOwner:
    r"""BucketOwner
    The owner of the bucket. This is always the project team's owner group.
    """
    
    entity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketVersioning:
    r"""BucketVersioning
    The bucket's versioning configuration.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketWebsite:
    r"""BucketWebsite
    The bucket's website configuration.
    """
    
    main_page_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPageSuffix') }})
    not_found_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notFoundPage') }})
    

@dataclass_json
@dataclasses.dataclass
class Bucket:
    r"""Bucket
    A bucket.
    """
    
    acl: Optional[list[shared_bucketaccesscontrol.BucketAccessControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    cors: Optional[list[BucketCors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    default_object_acl: Optional[list[shared_objectaccesscontrol.ObjectAccessControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultObjectAcl') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lifecycle: Optional[BucketLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    logging: Optional[BucketLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    metageneration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metageneration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[BucketOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    time_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versioning: Optional[BucketVersioning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    website: Optional[BucketWebsite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
