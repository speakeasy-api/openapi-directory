import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagepackagedependency as shared_languagepackagedependency
from ..shared import filelocation as shared_filelocation

class PackageDataPackageTypeEnum(str, Enum):
    PACKAGE_TYPE_UNSPECIFIED = "PACKAGE_TYPE_UNSPECIFIED"
    OS = "OS"
    MAVEN = "MAVEN"
    GO = "GO"
    GO_STDLIB = "GO_STDLIB"


@dataclass_json
@dataclasses.dataclass
class PackageData:
    cpe_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    dependency_chain: Optional[list[shared_languagepackagedependency.LanguagePackageDependency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyChain') }})
    file_location: Optional[list[shared_filelocation.FileLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    hash_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashDigest') }})
    os: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    package: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    package_type: Optional[PackageDataPackageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    patched_cve: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchedCve') }})
    unused: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unused') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
