import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateproviderinstance as shared_certificateproviderinstance
from ..shared import googlecloudnetworksecurityv1beta1grpcendpoint as shared_googlecloudnetworksecurityv1beta1grpcendpoint


@dataclass_json
@dataclasses.dataclass
class ValidationCa:
    r"""ValidationCa
    Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
    """
    
    certificate_provider_instance: Optional[shared_certificateproviderinstance.CertificateProviderInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateProviderInstance') }})
    grpc_endpoint: Optional[shared_googlecloudnetworksecurityv1beta1grpcendpoint.GoogleCloudNetworksecurityV1beta1GrpcEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcEndpoint') }})
    
