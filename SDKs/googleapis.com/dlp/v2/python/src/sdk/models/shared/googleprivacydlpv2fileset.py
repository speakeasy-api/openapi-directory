import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2cloudstorageregexfileset as shared_googleprivacydlpv2cloudstorageregexfileset


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2FileSet:
    r"""GooglePrivacyDlpV2FileSet
    Set of files to scan.
    """
    
    regex_file_set: Optional[shared_googleprivacydlpv2cloudstorageregexfileset.GooglePrivacyDlpV2CloudStorageRegexFileSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFileSet') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
