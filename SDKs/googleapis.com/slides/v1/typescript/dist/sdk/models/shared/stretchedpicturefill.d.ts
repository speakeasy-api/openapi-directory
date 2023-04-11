import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
/**
 * The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
 */
export declare class StretchedPictureFill extends SpeakeasyBase {
    /**
     * Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
     */
    contentUrl?: string;
    /**
     * A width and height.
     */
    size?: Size;
}
