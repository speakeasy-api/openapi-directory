import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2fieldselectionoptionschoice";
/**
 * Request to create a Selection Choice.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput extends SpeakeasyBase {
    /**
     * Selection field choice.
     */
    choice?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput;
    /**
     * Required. The Selection Field in which a Choice will be created.
     */
    fieldId?: string;
}
