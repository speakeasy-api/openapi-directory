import { SpeakeasyBase } from "../../../internal/utils";
import { VideoRating } from "./videorating";
/**
 * Successful response
 */
export declare class VideoGetRatingResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of ratings that match the request criteria.
     */
    items?: VideoRating[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
