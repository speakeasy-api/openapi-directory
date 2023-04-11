import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a button.
 */
export declare class GoogleCloudDialogflowV2IntentMessageCardButton extends SpeakeasyBase {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string;
    /**
     * Optional. The text to show on the button.
     */
    text?: string;
}
