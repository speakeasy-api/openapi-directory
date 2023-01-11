import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateidentityconstraints as shared_certificateidentityconstraints
from ..shared import certificateextensionconstraints as shared_certificateextensionconstraints
from ..shared import x509parameters as shared_x509parameters


@dataclass_json
@dataclasses.dataclass
class CertificateTemplateInput:
    r"""CertificateTemplateInput
    A CertificateTemplate refers to a managed template for certificate issuance.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identity_constraints: Optional[shared_certificateidentityconstraints.CertificateIdentityConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    passthrough_extensions: Optional[shared_certificateextensionconstraints.CertificateExtensionConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    predefined_values: Optional[shared_x509parameters.X509Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedValues') }})
    

@dataclass_json
@dataclasses.dataclass
class CertificateTemplate:
    r"""CertificateTemplate
    A CertificateTemplate refers to a managed template for certificate issuance.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identity_constraints: Optional[shared_certificateidentityconstraints.CertificateIdentityConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passthrough_extensions: Optional[shared_certificateextensionconstraints.CertificateExtensionConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    predefined_values: Optional[shared_x509parameters.X509Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedValues') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
