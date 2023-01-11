import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generatedassetpackslice as shared_generatedassetpackslice
from ..shared import generatedsplitapk as shared_generatedsplitapk
from ..shared import generatedstandaloneapk as shared_generatedstandaloneapk
from ..shared import generateduniversalapk as shared_generateduniversalapk


@dataclass_json
@dataclasses.dataclass
class GeneratedApksPerSigningKey:
    r"""GeneratedApksPerSigningKey
    Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
    """
    
    certificate_sha256_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateSha256Hash') }})
    generated_asset_pack_slices: Optional[list[shared_generatedassetpackslice.GeneratedAssetPackSlice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedAssetPackSlices') }})
    generated_split_apks: Optional[list[shared_generatedsplitapk.GeneratedSplitApk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedSplitApks') }})
    generated_standalone_apks: Optional[list[shared_generatedstandaloneapk.GeneratedStandaloneApk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedStandaloneApks') }})
    generated_universal_apk: Optional[shared_generateduniversalapk.GeneratedUniversalApk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedUniversalApk') }})
    
