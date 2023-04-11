import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
/**
 * Response media object for media content card.
 */
export declare class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
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
    icon?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * The image response message.
     */
    largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string;
}
