import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatetemplate as shared_certificatetemplate


@dataclass_json
@dataclasses.dataclass
class ListCertificateTemplatesResponse:
    r"""ListCertificateTemplatesResponse
    Response message for CertificateAuthorityService.ListCertificateTemplates.
    """
    
    certificate_templates: Optional[list[shared_certificatetemplate.CertificateTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
