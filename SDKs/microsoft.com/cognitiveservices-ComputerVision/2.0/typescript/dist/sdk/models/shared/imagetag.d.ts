import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entity observation in the image, along with the confidence score.
 */
export declare class ImageTag extends SpeakeasyBase {
    /**
     * The level of confidence that the entity was observed.
     */
    confidence?: number;
    /**
     * Optional hint/details for this tag.
     */
    hint?: string;
    /**
     * Name of the entity.
     */
    name?: string;
}
