import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipsLevelSnippet } from "./membershipslevelsnippet";
/**
 * A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
 */
export declare class MembershipsLevel extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the memberships level.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
     */
    kind?: string;
    snippet?: MembershipsLevelSnippet;
}
