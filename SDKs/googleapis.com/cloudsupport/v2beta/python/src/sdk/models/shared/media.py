import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blobstore2info as shared_blobstore2info
from ..shared import compositemedia as shared_compositemedia
from ..shared import contenttypeinfo as shared_contenttypeinfo
from ..shared import diffchecksumsresponse as shared_diffchecksumsresponse
from ..shared import diffdownloadresponse as shared_diffdownloadresponse
from ..shared import diffuploadrequest as shared_diffuploadrequest
from ..shared import diffuploadresponse as shared_diffuploadresponse
from ..shared import diffversionresponse as shared_diffversionresponse
from ..shared import downloadparameters as shared_downloadparameters
from ..shared import objectid as shared_objectid

class MediaReferenceTypeEnum(str, Enum):
    PATH = "PATH"
    BLOB_REF = "BLOB_REF"
    INLINE = "INLINE"
    GET_MEDIA = "GET_MEDIA"
    COMPOSITE_MEDIA = "COMPOSITE_MEDIA"
    BIGSTORE_REF = "BIGSTORE_REF"
    DIFF_VERSION_RESPONSE = "DIFF_VERSION_RESPONSE"
    DIFF_CHECKSUMS_RESPONSE = "DIFF_CHECKSUMS_RESPONSE"
    DIFF_DOWNLOAD_RESPONSE = "DIFF_DOWNLOAD_RESPONSE"
    DIFF_UPLOAD_REQUEST = "DIFF_UPLOAD_REQUEST"
    DIFF_UPLOAD_RESPONSE = "DIFF_UPLOAD_RESPONSE"
    COSMO_BINARY_REFERENCE = "COSMO_BINARY_REFERENCE"
    ARBITRARY_BYTES = "ARBITRARY_BYTES"


@dataclass_json
@dataclasses.dataclass
class Media:
    r"""Media
    # gdata.* are outside protos with mising documentation
    """
    
    algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    bigstore_object_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigstoreObjectRef') }})
    blob_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobRef') }})
    blobstore2_info: Optional[shared_blobstore2info.Blobstore2Info] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobstore2Info') }})
    composite_media: Optional[list[shared_compositemedia.CompositeMedia]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeMedia') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    content_type_info: Optional[shared_contenttypeinfo.ContentTypeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentTypeInfo') }})
    cosmo_binary_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosmoBinaryReference') }})
    crc32c_hash: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32cHash') }})
    diff_checksums_response: Optional[shared_diffchecksumsresponse.DiffChecksumsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffChecksumsResponse') }})
    diff_download_response: Optional[shared_diffdownloadresponse.DiffDownloadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffDownloadResponse') }})
    diff_upload_request: Optional[shared_diffuploadrequest.DiffUploadRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadRequest') }})
    diff_upload_response: Optional[shared_diffuploadresponse.DiffUploadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadResponse') }})
    diff_version_response: Optional[shared_diffversionresponse.DiffVersionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffVersionResponse') }})
    download_parameters: Optional[shared_downloadparameters.DownloadParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadParameters') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    hash_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashVerified') }})
    inline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    is_potential_retry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPotentialRetry') }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Hash') }})
    media_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaId') }})
    object_id: Optional[shared_objectid.ObjectID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reference_type: Optional[MediaReferenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    sha1_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Hash') }})
    sha256_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Hash') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
