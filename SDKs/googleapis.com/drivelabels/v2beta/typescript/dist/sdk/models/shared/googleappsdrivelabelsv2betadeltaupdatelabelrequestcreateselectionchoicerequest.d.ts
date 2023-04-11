import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";
/**
 * Request to create a Selection Choice.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput extends SpeakeasyBase {
    /**
     * Selection field choice.
     */
    choice?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput;
    /**
     * Required. The Selection Field in which a Choice will be created.
     */
    fieldId?: string;
}
