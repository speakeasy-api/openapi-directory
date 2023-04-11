import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image caption, i.e. a brief description of what the image depicts.
 */
export declare class ImageCaption extends SpeakeasyBase {
    /**
     * The level of confidence the service has in the caption.
     */
    confidence?: number;
    /**
     * The text of the caption.
     */
    text?: string;
}
