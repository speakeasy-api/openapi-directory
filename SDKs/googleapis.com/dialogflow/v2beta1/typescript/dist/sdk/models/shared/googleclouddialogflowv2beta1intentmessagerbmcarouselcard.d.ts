import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";
/**
 * Required. The width of the cards in the carousel.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum {
    CardWidthUnspecified = "CARD_WIDTH_UNSPECIFIED",
    Small = "SMALL",
    Medium = "MEDIUM"
}
/**
 * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard extends SpeakeasyBase {
    /**
     * Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10.
     */
    cardContents?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent[];
    /**
     * Required. The width of the cards in the carousel.
     */
    cardWidth?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
}
