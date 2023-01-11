import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2partitionid as shared_googleprivacydlpv2partitionid
from ..shared import googleprivacydlpv2pathelement as shared_googleprivacydlpv2pathelement


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Key:
    r"""GooglePrivacyDlpV2Key
    A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
    """
    
    partition_id: Optional[shared_googleprivacydlpv2partitionid.GooglePrivacyDlpV2PartitionID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    path: Optional[list[shared_googleprivacydlpv2pathelement.GooglePrivacyDlpV2PathElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
