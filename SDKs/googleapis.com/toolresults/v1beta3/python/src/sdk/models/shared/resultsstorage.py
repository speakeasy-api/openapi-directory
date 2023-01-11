import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference


@dataclass_json
@dataclasses.dataclass
class ResultsStorage:
    r"""ResultsStorage
    The storage for test results.
    """
    
    results_storage_path: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsStoragePath') }})
    xunit_xml_file: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xunitXmlFile') }})
    
