import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";
import { Placeholder } from "./placeholder";
/**
 * A PageElement kind representing an image.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
     */
    contentUrl?: string;
    /**
     * The properties of the Image.
     */
    imageProperties?: ImageProperties;
    /**
     * The placeholder information that uniquely identifies a placeholder shape.
     */
    placeholder?: Placeholder;
    /**
     * The source URL is the URL used to insert the image. The source URL can be empty.
     */
    sourceUrl?: string;
}
