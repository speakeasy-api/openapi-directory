import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kindexpression as shared_googleprivacydlpv2kindexpression
from ..shared import googleprivacydlpv2partitionid as shared_googleprivacydlpv2partitionid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DatastoreOptions:
    r"""GooglePrivacyDlpV2DatastoreOptions
    Options defining a data set within Google Cloud Datastore.
    """
    
    kind: Optional[shared_googleprivacydlpv2kindexpression.GooglePrivacyDlpV2KindExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    partition_id: Optional[shared_googleprivacydlpv2partitionid.GooglePrivacyDlpV2PartitionID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    
