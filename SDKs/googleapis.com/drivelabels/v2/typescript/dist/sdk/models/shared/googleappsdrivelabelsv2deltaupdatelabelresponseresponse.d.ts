import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
/**
 * A single response from an update.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse extends SpeakeasyBase {
    /**
     * Response following Field create.
     */
    createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse;
    /**
     * Response following Selection Choice create.
     */
    createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse;
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
    updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
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
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
