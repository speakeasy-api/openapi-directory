import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipsLevel } from "./membershipslevel";
/**
 * Successful response
 */
export declare class MembershipsLevelListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of pricing levels offered by a creator to the fans.
     */
    items?: MembershipsLevel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
