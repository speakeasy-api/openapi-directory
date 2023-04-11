import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri";
/**
 * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction extends SpeakeasyBase {
    /**
     * Opens the user's default dialer app with the specified phone number but does not dial automatically.
     */
    dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
    /**
     * Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
     */
    openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string;
    /**
     * Opens the device's location chooser so the user can pick a location to send back to the agent.
     */
    shareLocation?: Record<string, any>;
    /**
     * Text to display alongside the action.
     */
    text?: string;
}
