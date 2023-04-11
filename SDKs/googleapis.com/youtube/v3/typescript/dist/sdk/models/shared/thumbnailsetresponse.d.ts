import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Successful response
 */
export declare class ThumbnailSetResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of thumbnails.
     */
    items?: ThumbnailDetails[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
