import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateissuanceconfig as shared_certificateissuanceconfig


@dataclass_json
@dataclasses.dataclass
class ListCertificateIssuanceConfigsResponse:
    r"""ListCertificateIssuanceConfigsResponse
    Response for the `ListCertificateIssuanceConfigs` method.
    """
    
    certificate_issuance_configs: Optional[list[shared_certificateissuanceconfig.CertificateIssuanceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateIssuanceConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
