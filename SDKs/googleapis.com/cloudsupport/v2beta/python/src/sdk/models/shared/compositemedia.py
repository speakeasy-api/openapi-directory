import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blobstore2info as shared_blobstore2info
from ..shared import objectid as shared_objectid

class CompositeMediaReferenceTypeEnum(str, Enum):
    PATH = "PATH"
    BLOB_REF = "BLOB_REF"
    INLINE = "INLINE"
    BIGSTORE_REF = "BIGSTORE_REF"
    COSMO_BINARY_REFERENCE = "COSMO_BINARY_REFERENCE"


@dataclass_json
@dataclasses.dataclass
class CompositeMedia:
    r"""CompositeMedia
    # gdata.* are outside protos with mising documentation
    """
    
    blob_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobRef') }})
    blobstore2_info: Optional[shared_blobstore2info.Blobstore2Info] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobstore2Info') }})
    cosmo_binary_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosmoBinaryReference') }})
    crc32c_hash: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32cHash') }})
    inline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Hash') }})
    object_id: Optional[shared_objectid.ObjectID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reference_type: Optional[CompositeMediaReferenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    sha1_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Hash') }})
    
