import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateproviderinstance as shared_certificateproviderinstance
from ..shared import googlecloudnetworksecurityv1grpcendpoint as shared_googlecloudnetworksecurityv1grpcendpoint


@dataclass_json
@dataclasses.dataclass
class GoogleCloudNetworksecurityV1CertificateProvider:
    r"""GoogleCloudNetworksecurityV1CertificateProvider
    Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
    """
    
    certificate_provider_instance: Optional[shared_certificateproviderinstance.CertificateProviderInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateProviderInstance') }})
    grpc_endpoint: Optional[shared_googlecloudnetworksecurityv1grpcendpoint.GoogleCloudNetworksecurityV1GrpcEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcEndpoint') }})
    
