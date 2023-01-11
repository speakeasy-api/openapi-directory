import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mtlspolicy as shared_mtlspolicy
from ..shared import googlecloudnetworksecurityv1certificateprovider as shared_googlecloudnetworksecurityv1certificateprovider


@dataclass_json
@dataclasses.dataclass
class ServerTLSPolicy:
    r"""ServerTLSPolicy
    ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
    """
    
    allow_open: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOpen') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mtls_policy: Optional[shared_mtlspolicy.MtlsPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtlsPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_certificate: Optional[shared_googlecloudnetworksecurityv1certificateprovider.GoogleCloudNetworksecurityV1CertificateProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificate') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ServerTLSPolicyInput:
    r"""ServerTLSPolicyInput
    ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
    """
    
    allow_open: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOpen') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mtls_policy: Optional[shared_mtlspolicy.MtlsPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtlsPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_certificate: Optional[shared_googlecloudnetworksecurityv1certificateprovider.GoogleCloudNetworksecurityV1CertificateProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificate') }})
    
