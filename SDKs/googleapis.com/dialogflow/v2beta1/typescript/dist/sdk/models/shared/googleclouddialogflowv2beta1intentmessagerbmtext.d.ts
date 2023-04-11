import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";
/**
 * Rich Business Messaging (RBM) text response with suggestions.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmText extends SpeakeasyBase {
    /**
     * Optional. One or more suggestions to show to the user.
     */
    rbmSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Required. Text sent and displayed to the user.
     */
    text?: string;
}
