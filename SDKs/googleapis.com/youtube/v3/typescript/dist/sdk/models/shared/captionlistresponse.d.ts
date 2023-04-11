import { SpeakeasyBase } from "../../../internal/utils";
import { Caption } from "./caption";
/**
 * Successful response
 */
export declare class CaptionListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of captions that match the request criteria.
     */
    items?: Caption[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
