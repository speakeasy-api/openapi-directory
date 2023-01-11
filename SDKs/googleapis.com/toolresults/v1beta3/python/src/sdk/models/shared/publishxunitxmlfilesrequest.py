import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference


@dataclass_json
@dataclasses.dataclass
class PublishXunitXMLFilesRequest:
    r"""PublishXunitXMLFilesRequest
    Request message for StepService.PublishXunitXmlFiles.
    """
    
    xunit_xml_files: Optional[list[shared_filereference.FileReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xunitXmlFiles') }})
    
