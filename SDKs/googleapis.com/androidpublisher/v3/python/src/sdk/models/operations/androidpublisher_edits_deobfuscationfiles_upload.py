import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import deobfuscationfilesuploadresponse as shared_deobfuscationfilesuploadresponse

class AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum(str, Enum):
    DEOBFUSCATION_FILE_TYPE_UNSPECIFIED = "deobfuscationFileTypeUnspecified"
    PROGUARD = "proguard"
    NATIVE_CODE = "nativeCode"


@dataclasses.dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadPathParams:
    apk_version_code: int = dataclasses.field(metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    deobfuscation_file_type: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'deobfuscationFileType', 'style': 'simple', 'explode': False }})
    edit_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadRequest:
    path_params: AndroidpublisherEditsDeobfuscationfilesUploadPathParams = dataclasses.field()
    query_params: AndroidpublisherEditsDeobfuscationfilesUploadQueryParams = dataclasses.field()
    security: AndroidpublisherEditsDeobfuscationfilesUploadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deobfuscation_files_upload_response: Optional[shared_deobfuscationfilesuploadresponse.DeobfuscationFilesUploadResponse] = dataclasses.field(default=None)
    
