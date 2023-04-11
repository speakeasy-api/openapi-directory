import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
/**
 * Response media object for media content card.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
    /**
     * Required. Url where the media is stored.
     */
    contentUrl?: string;
    /**
     * Optional. Description of media card.
     */
    description?: string;
    /**
     * The image response message.
     */
    icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * The image response message.
     */
    largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string;
}
