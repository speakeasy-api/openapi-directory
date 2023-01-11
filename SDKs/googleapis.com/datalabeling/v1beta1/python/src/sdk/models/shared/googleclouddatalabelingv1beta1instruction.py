import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1csvinstruction as shared_googleclouddatalabelingv1beta1csvinstruction
from ..shared import googleclouddatalabelingv1beta1pdfinstruction as shared_googleclouddatalabelingv1beta1pdfinstruction

class GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    GENERAL_DATA = "GENERAL_DATA"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1Instruction:
    r"""GoogleCloudDatalabelingV1beta1Instruction
    Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
    """
    
    blocking_resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingResources') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    csv_instruction: Optional[shared_googleclouddatalabelingv1beta1csvinstruction.GoogleCloudDatalabelingV1beta1CsvInstruction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvInstruction') }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pdf_instruction: Optional[shared_googleclouddatalabelingv1beta1pdfinstruction.GoogleCloudDatalabelingV1beta1PdfInstruction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfInstruction') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
