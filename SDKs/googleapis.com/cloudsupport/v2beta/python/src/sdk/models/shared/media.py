"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
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
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class MediaReferenceTypeEnum(str, Enum):
    r"""# gdata.* are outside protos with mising documentation"""
    PATH = 'PATH'
    BLOB_REF = 'BLOB_REF'
    INLINE = 'INLINE'
    GET_MEDIA = 'GET_MEDIA'
    COMPOSITE_MEDIA = 'COMPOSITE_MEDIA'
    BIGSTORE_REF = 'BIGSTORE_REF'
    DIFF_VERSION_RESPONSE = 'DIFF_VERSION_RESPONSE'
    DIFF_CHECKSUMS_RESPONSE = 'DIFF_CHECKSUMS_RESPONSE'
    DIFF_DOWNLOAD_RESPONSE = 'DIFF_DOWNLOAD_RESPONSE'
    DIFF_UPLOAD_REQUEST = 'DIFF_UPLOAD_REQUEST'
    DIFF_UPLOAD_RESPONSE = 'DIFF_UPLOAD_RESPONSE'
    COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE'
    ARBITRARY_BYTES = 'ARBITRARY_BYTES'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Media:
    r"""# gdata.* are outside protos with mising documentation"""
    
    algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('algorithm'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    bigstore_object_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bigstoreObjectRef'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    blob_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blobRef'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    blobstore2_info: Optional[shared_blobstore2info.Blobstore2Info] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blobstore2Info'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    composite_media: Optional[list[shared_compositemedia.CompositeMedia]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('compositeMedia'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contentType'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    content_type_info: Optional[shared_contenttypeinfo.ContentTypeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contentTypeInfo'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    cosmo_binary_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cosmoBinaryReference'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    crc32c_hash: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('crc32cHash'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    diff_checksums_response: Optional[shared_diffchecksumsresponse.DiffChecksumsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('diffChecksumsResponse'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    diff_download_response: Optional[shared_diffdownloadresponse.DiffDownloadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('diffDownloadResponse'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    diff_upload_request: Optional[shared_diffuploadrequest.DiffUploadRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('diffUploadRequest'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    diff_upload_response: Optional[shared_diffuploadresponse.DiffUploadResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('diffUploadResponse'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    diff_version_response: Optional[shared_diffversionresponse.DiffVersionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('diffVersionResponse'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    download_parameters: Optional[shared_downloadparameters.DownloadParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('downloadParameters'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('filename'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hash'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    hash_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hashVerified'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    inline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('inline'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    is_potential_retry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isPotentialRetry'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('length'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    md5_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5Hash'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    media_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mediaId'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    object_id: Optional[shared_objectid.ObjectID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('objectId'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('path'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    reference_type: Optional[MediaReferenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('referenceType'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    sha1_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sha1Hash'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    sha256_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sha256Hash'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('token'), 'exclude': lambda f: f is None }})
    r"""# gdata.* are outside protos with mising documentation"""  
    