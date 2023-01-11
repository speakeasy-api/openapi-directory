import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketaccesscontrol as shared_bucketaccesscontrol
from ..shared import objectaccesscontrol as shared_objectaccesscontrol


@dataclass_json
@dataclasses.dataclass
class BucketAutoclass:
    r"""BucketAutoclass
    The bucket's Autoclass configuration.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    toggle_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toggleTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketBilling:
    r"""BucketBilling
    The bucket's billing configuration.
    """
    
    requester_pays: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requesterPays') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketCors:
    max_age_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAgeSeconds') }})
    method: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    origin: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    response_header: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeader') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketCustomPlacementConfig:
    r"""BucketCustomPlacementConfig
    The bucket's custom placement configuration for Custom Dual Regions.
    """
    
    data_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLocations') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketEncryption:
    r"""BucketEncryption
    Encryption configuration for a bucket.
    """
    
    default_kms_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultKmsKeyName') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketIamConfigurationBucketPolicyOnly:
    r"""BucketIamConfigurationBucketPolicyOnly
    The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    locked_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketIamConfigurationUniformBucketLevelAccess:
    r"""BucketIamConfigurationUniformBucketLevelAccess
    The bucket's uniform bucket-level access configuration.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    locked_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketIamConfiguration:
    r"""BucketIamConfiguration
    The bucket's IAM configuration.
    """
    
    bucket_policy_only: Optional[BucketIamConfigurationBucketPolicyOnly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPolicyOnly') }})
    public_access_prevention: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccessPrevention') }})
    uniform_bucket_level_access: Optional[BucketIamConfigurationUniformBucketLevelAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniformBucketLevelAccess') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycleRuleAction:
    r"""BucketLifecycleRuleAction
    The action to take.
    """
    
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class BucketLifecycleRuleCondition:
    r"""BucketLifecycleRuleCondition
    The condition(s) under which the action will be taken.
    """
    
    age: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    created_before: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBefore'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_time_before: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTimeBefore'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    days_since_custom_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysSinceCustomTime') }})
    days_since_noncurrent_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysSinceNoncurrentTime') }})
    is_live: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLive') }})
    matches_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesPattern') }})
    matches_prefix: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesPrefix') }})
    matches_storage_class: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesStorageClass') }})
    matches_suffix: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesSuffix') }})
    noncurrent_time_before: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noncurrentTimeBefore'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
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
    The bucket's lifecycle configuration. See lifecycle management for more information.
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
class BucketRetentionPolicy:
    r"""BucketRetentionPolicy
    The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
    """
    
    effective_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    retention_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    

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
    The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
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
    autoclass: Optional[BucketAutoclass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoclass') }})
    billing: Optional[BucketBilling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    cors: Optional[list[BucketCors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    custom_placement_config: Optional[BucketCustomPlacementConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPlacementConfig') }})
    default_event_based_hold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEventBasedHold') }})
    default_object_acl: Optional[list[shared_objectaccesscontrol.ObjectAccessControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultObjectAcl') }})
    encryption: Optional[BucketEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    iam_configuration: Optional[BucketIamConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamConfiguration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifecycle: Optional[BucketLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    logging: Optional[BucketLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    metageneration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metageneration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[BucketOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    project_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNumber') }})
    retention_policy: Optional[BucketRetentionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPolicy') }})
    rpo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpo') }})
    satisfies_pzs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPZS') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    time_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versioning: Optional[BucketVersioning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    website: Optional[BucketWebsite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
