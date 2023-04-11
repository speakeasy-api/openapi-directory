import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";
/**
 * Rich Business Messaging (RBM) Card content
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent extends SpeakeasyBase {
    /**
     * Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set.
     */
    description?: string;
    /**
     * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
     */
    media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
    /**
     * Optional. List of suggestions to include in the card.
     */
    suggestions?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set.
     */
    title?: string;
}
