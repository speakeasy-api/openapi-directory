import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedaction";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedreply";
/**
 * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion extends SpeakeasyBase {
    /**
     * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
     */
    action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
    /**
     * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
     */
    reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
}
