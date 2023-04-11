import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
/**
 * Browsing carousel tile
 */
export declare class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
    /**
     * Optional. Description of the carousel item. Maximum of four lines of text.
     */
    description?: string;
    /**
     * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
     */
    footer?: string;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Actions on Google action to open a given url.
     */
    openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    /**
     * Required. Title of the carousel item. Maximum of two lines of text.
     */
    title?: string;
}
