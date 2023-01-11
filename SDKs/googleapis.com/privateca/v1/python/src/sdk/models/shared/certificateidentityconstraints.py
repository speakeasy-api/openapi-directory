import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expr as shared_expr


@dataclass_json
@dataclasses.dataclass
class CertificateIdentityConstraints:
    r"""CertificateIdentityConstraints
    Describes constraints on a Certificate's Subject and SubjectAltNames.
    """
    
    allow_subject_alt_names_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSubjectAltNamesPassthrough') }})
    allow_subject_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSubjectPassthrough') }})
    cel_expression: Optional[shared_expr.Expr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('celExpression') }})
    
