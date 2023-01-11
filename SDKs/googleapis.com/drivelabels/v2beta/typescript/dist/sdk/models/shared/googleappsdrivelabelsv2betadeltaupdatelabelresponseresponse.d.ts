import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
/**
 * A single response from an update.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse extends SpeakeasyBase {
    createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;
    createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;
    deleteField?: Record<string, any>;
    deleteSelectionChoice?: Record<string, any>;
    disableField?: Record<string, any>;
    disableSelectionChoice?: Record<string, any>;
    enableField?: Record<string, any>;
    enableSelectionChoice?: Record<string, any>;
    updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
    updateFieldType?: Record<string, any>;
    updateLabel?: Record<string, any>;
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
