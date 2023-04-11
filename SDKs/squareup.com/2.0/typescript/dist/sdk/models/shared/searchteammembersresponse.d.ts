import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMember } from "./teammember";
/**
 * Represents a response from a search request containing a filtered list of `TeamMember` objects.
 */
export declare class SearchTeamMembersResponse extends SpeakeasyBase {
    /**
     * The opaque cursor for fetching the next page. For more information, see
     *
     * @remarks
     * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The filtered list of `TeamMember` objects.
     */
    teamMembers?: TeamMember[];
}
