import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse as shared_googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse as shared_googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse as shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse as shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse
    A single response from an update.
    """
    
    create_field: Optional[shared_googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createField') }})
    create_selection_choice: Optional[shared_googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSelectionChoice') }})
    delete_field: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteField') }})
    delete_selection_choice: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteSelectionChoice') }})
    disable_field: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableField') }})
    disable_selection_choice: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSelectionChoice') }})
    enable_field: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableField') }})
    enable_selection_choice: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSelectionChoice') }})
    update_field: Optional[shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateField') }})
    update_field_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFieldType') }})
    update_label: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLabel') }})
    update_selection_choice_properties: Optional[shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSelectionChoiceProperties') }})
    
