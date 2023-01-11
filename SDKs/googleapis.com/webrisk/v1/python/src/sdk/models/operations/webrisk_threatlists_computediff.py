import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlecloudwebriskv1computethreatlistdiffresponse as shared_googlecloudwebriskv1computethreatlistdiffresponse

class WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"

class WebriskThreatListsComputeDiffThreatTypeEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"


@dataclasses.dataclass
class WebriskThreatListsComputeDiffQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    constraints_max_database_entries: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constraints.maxDatabaseEntries', 'style': 'form', 'explode': True }})
    constraints_max_diff_entries: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constraints.maxDiffEntries', 'style': 'form', 'explode': True }})
    constraints_supported_compressions: Optional[list[WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constraints.supportedCompressions', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    threat_type: Optional[WebriskThreatListsComputeDiffThreatTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'threatType', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    version_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'versionToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WebriskThreatListsComputeDiffSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebriskThreatListsComputeDiffRequest:
    query_params: WebriskThreatListsComputeDiffQueryParams = dataclasses.field()
    security: WebriskThreatListsComputeDiffSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebriskThreatListsComputeDiffResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_webrisk_v1_compute_threat_list_diff_response: Optional[shared_googlecloudwebriskv1computethreatlistdiffresponse.GoogleCloudWebriskV1ComputeThreatListDiffResponse] = dataclasses.field(default=None)
    
