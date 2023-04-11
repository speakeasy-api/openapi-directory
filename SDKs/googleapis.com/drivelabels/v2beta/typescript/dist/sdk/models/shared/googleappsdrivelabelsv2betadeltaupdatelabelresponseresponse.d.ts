import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
/**
 * A single response from an update.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse extends SpeakeasyBase {
    /**
     * Response following Field create.
     */
    createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;
    /**
     * Response following Selection Choice create.
     */
    createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;
    /**
     * Response following Field delete.
     */
    deleteField?: Record<string, any>;
    /**
     * Response following Choice delete.
     */
    deleteSelectionChoice?: Record<string, any>;
    /**
     * Response following Field disable.
     */
    disableField?: Record<string, any>;
    /**
     * Response following Choice disable.
     */
    disableSelectionChoice?: Record<string, any>;
    /**
     * Response following Field enable.
     */
    enableField?: Record<string, any>;
    /**
     * Response following Choice enable.
     */
    enableSelectionChoice?: Record<string, any>;
    /**
     * Response following update to Field properties.
     */
    updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
    /**
     * Response following update to Field type.
     */
    updateFieldType?: Record<string, any>;
    /**
     * Response following update to Label properties.
     */
    updateLabel?: Record<string, any>;
    /**
     * Response following update to Selection Choice properties.
     */
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
