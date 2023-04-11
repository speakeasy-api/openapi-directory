import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ValidationMessage } from "./googleclouddialogflowcxv3validationmessage";
/**
 * The response message for Flows.GetFlowValidationResult.
 */
export declare class GoogleCloudDialogflowCxV3FlowValidationResult extends SpeakeasyBase {
    /**
     * The unique identifier of the flow validation result. Format: `projects//locations//agents//flows//validationResult`.
     */
    name?: string;
    /**
     * Last time the flow was validated.
     */
    updateTime?: string;
    /**
     * Contains all validation messages.
     */
    validationMessages?: GoogleCloudDialogflowCxV3ValidationMessage[];
}
