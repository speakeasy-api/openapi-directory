import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gdatablobstore2info as shared_gdatablobstore2info
from ..shared import gdataobjectid as shared_gdataobjectid

class GdataCompositeMediaReferenceTypeEnum(str, Enum):
    PATH = "PATH"
    BLOB_REF = "BLOB_REF"
    INLINE = "INLINE"
    BIGSTORE_REF = "BIGSTORE_REF"
    COSMO_BINARY_REFERENCE = "COSMO_BINARY_REFERENCE"


@dataclass_json
@dataclasses.dataclass
class GdataCompositeMedia:
    r"""GdataCompositeMedia
    gdata
    """
    
    blob_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobRef') }})
    blobstore2_info: Optional[shared_gdatablobstore2info.GdataBlobstore2Info] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobstore2Info') }})
    cosmo_binary_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosmoBinaryReference') }})
    crc32c_hash: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32cHash') }})
    inline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Hash') }})
    object_id: Optional[shared_gdataobjectid.GdataObjectID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reference_type: Optional[GdataCompositeMediaReferenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    sha1_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Hash') }})
    
