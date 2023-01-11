import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudnetworksecurityv1certificateprovider as shared_googlecloudnetworksecurityv1certificateprovider
from ..shared import validationca as shared_validationca


@dataclass_json
@dataclasses.dataclass
class ClientTLSPolicy:
    r"""ClientTLSPolicy
    ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
    """
    
    client_certificate: Optional[shared_googlecloudnetworksecurityv1certificateprovider.GoogleCloudNetworksecurityV1CertificateProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_ca: Optional[list[shared_validationca.ValidationCa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationCa') }})
    sni: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sni') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ClientTLSPolicyInput:
    r"""ClientTLSPolicyInput
    ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
    """
    
    client_certificate: Optional[shared_googlecloudnetworksecurityv1certificateprovider.GoogleCloudNetworksecurityV1CertificateProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_ca: Optional[list[shared_validationca.ValidationCa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationCa') }})
    sni: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sni') }})
    
