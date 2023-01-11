import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2key as shared_googleprivacydlpv2key


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DatastoreKey:
    r"""GooglePrivacyDlpV2DatastoreKey
    Record key for a finding in Cloud Datastore.
    """
    
    entity_key: Optional[shared_googleprivacydlpv2key.GooglePrivacyDlpV2Key] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityKey') }})
    
