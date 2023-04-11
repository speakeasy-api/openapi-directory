import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
import { Size } from "./size";
/**
 * Inserts an InlineObject containing an image at the given location.
 */
export declare class InsertInlineImageRequest extends SpeakeasyBase {
    /**
     * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
     */
    endOfSegmentLocation?: EndOfSegmentLocation;
    /**
     * A particular location in the document.
     */
    location?: Location;
    /**
     * A width and height.
     */
    objectSize?: Size;
    /**
     * The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.
     */
    uri?: string;
}
