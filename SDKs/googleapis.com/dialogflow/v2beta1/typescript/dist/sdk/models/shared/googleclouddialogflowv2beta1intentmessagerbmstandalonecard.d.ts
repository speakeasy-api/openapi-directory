import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";
/**
 * Required. Orientation of the card.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum {
    CardOrientationUnspecified = "CARD_ORIENTATION_UNSPECIFIED",
    Horizontal = "HORIZONTAL",
    Vertical = "VERTICAL"
}
/**
 * Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum {
    ThumbnailImageAlignmentUnspecified = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED",
    Left = "LEFT",
    Right = "RIGHT"
}
/**
 * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard extends SpeakeasyBase {
    /**
     * Rich Business Messaging (RBM) Card content
     */
    cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
    /**
     * Required. Orientation of the card.
     */
    cardOrientation?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
    /**
     * Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.
     */
    thumbnailImageAlignment?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
}
