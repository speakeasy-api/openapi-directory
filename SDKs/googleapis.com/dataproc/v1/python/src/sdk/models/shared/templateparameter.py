import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parametervalidation as shared_parametervalidation


@dataclass_json
@dataclasses.dataclass
class TemplateParameter:
    r"""TemplateParameter
    A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    validation: Optional[shared_parametervalidation.ParameterValidation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
