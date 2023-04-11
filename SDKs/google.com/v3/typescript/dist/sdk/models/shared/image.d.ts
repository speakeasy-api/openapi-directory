import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";
/**
 * A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4
 */
export declare class Image extends SpeakeasyBase {
    /**
     * URL that is deeplink to the image in a gallery (or a webpage).
     */
    galleryUri?: LocalizedText[];
    /**
     * Title of the image.
     */
    title?: LocalizedText[];
    /**
     * URL that points to the binary image content directly.
     */
    uri?: string;
}
