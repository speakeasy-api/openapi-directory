import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The image response message.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageImage extends SpeakeasyBase {
    /**
     * A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
     */
    accessibilityText?: string;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string;
}
