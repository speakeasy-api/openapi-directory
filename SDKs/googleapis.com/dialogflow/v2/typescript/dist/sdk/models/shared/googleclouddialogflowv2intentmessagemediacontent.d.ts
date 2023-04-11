import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2intentmessagemediacontentresponsemediaobject";
/**
 * Optional. What type of media is the content (ie "audio").
 */
export declare enum GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO"
}
/**
 * The media content card for Actions on Google.
 */
export declare class GoogleCloudDialogflowV2IntentMessageMediaContent extends SpeakeasyBase {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie "audio").
     */
    mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
}
