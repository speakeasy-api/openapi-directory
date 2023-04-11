import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2beta1intentmessagemediacontentresponsemediaobject";
/**
 * Optional. What type of media is the content (ie "audio").
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO"
}
/**
 * The media content card for Actions on Google.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageMediaContent extends SpeakeasyBase {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie "audio").
     */
    mediaType?: GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum;
}
