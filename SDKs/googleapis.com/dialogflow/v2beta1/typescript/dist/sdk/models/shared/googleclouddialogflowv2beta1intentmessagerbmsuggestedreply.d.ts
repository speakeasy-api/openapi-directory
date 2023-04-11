import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply extends SpeakeasyBase {
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string;
    /**
     * Suggested reply text.
     */
    text?: string;
}
