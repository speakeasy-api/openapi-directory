import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gdatablobstore2info as shared_gdatablobstore2info
from ..shared import gdatacompositemedia as shared_gdatacompositemedia
from ..shared import gdatacontenttypeinfo as shared_gdatacontenttypeinfo
from ..shared import gdatadiffchecksumsresponse as shared_gdatadiffchecksumsresponse
from ..shared import gdatadiffdownloadresponse as shared_gdatadiffdownloadresponse
from ..shared import gdatadiffuploadrequest as shared_gdatadiffuploadrequest
from ..shared import gdatadiffuploadresponse as shared_gdatadiffuploadresponse
from ..shared import gdatadiffversionresponse as shared_gdatadiffversionresponse
from ..shared import gdatadownloadparameters as shared_gdatadownloadparameters
from ..shared import gdataobjectid as shared_gdataobjectid

class GdataMediaReferenceTypeEnum(str, Enum):
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
class GdataMedia:
    r"""GdataMedia
    gdata
    """
    
    algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    bigstore_object_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigstoreObjectRef') }})
    blob_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobRef') }})
    blobstore2_info: Optional[shared_gdatablobstore2info.GdataBlobstore2Info] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobstore2Info') }})
    composite_media: Optional[list[shared_gdatacompositemedia.GdataCompositeMedia]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeMedia') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    content_type_info: Optional[shared_gdatacontenttypeinfo.GdataContentTypeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentTypeInfo') }})
    cosmo_binary_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosmoBinaryReference') }})
    crc32c_hash: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32cHash') }})
    diff_checksums_response: Optional[shared_gdatadiffchecksumsresponse.GdataDiffChecksumsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffChecksumsResponse') }})
    diff_download_response: Optional[shared_gdatadiffdownloadresponse.GdataDiffDownloadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffDownloadResponse') }})
    diff_upload_request: Optional[shared_gdatadiffuploadrequest.GdataDiffUploadRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadRequest') }})
    diff_upload_response: Optional[shared_gdatadiffuploadresponse.GdataDiffUploadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadResponse') }})
    diff_version_response: Optional[shared_gdatadiffversionresponse.GdataDiffVersionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffVersionResponse') }})
    download_parameters: Optional[shared_gdatadownloadparameters.GdataDownloadParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadParameters') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    hash_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashVerified') }})
    inline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    is_potential_retry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPotentialRetry') }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Hash') }})
    media_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaId') }})
    object_id: Optional[shared_gdataobjectid.GdataObjectID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reference_type: Optional[GdataMediaReferenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    sha1_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Hash') }})
    sha256_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Hash') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
