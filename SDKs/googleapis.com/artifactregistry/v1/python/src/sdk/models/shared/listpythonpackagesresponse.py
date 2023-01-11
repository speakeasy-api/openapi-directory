import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pythonpackage as shared_pythonpackage


@dataclass_json
@dataclasses.dataclass
class ListPythonPackagesResponse:
    r"""ListPythonPackagesResponse
    The response from listing python packages.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    python_packages: Optional[list[shared_pythonpackage.PythonPackage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
