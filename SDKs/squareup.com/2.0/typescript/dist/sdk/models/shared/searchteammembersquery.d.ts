import { SpeakeasyBase } from "../../../internal/utils";
import { SearchTeamMembersFilter } from "./searchteammembersfilter";
/**
 * Represents the parameters in a search for `TeamMember` objects.
 */
export declare class SearchTeamMembersQuery extends SpeakeasyBase {
    /**
     * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied
     *
     * @remarks
     * between the individual fields, and `OR` logic is applied within list-based fields.
     * For example, setting this filter value:
     * ```
     * filter = (locations_ids = ["A", "B"], status = ACTIVE)
     * ```
     * returns only active team members assigned to either location "A" or "B".
     */
    filter?: SearchTeamMembersFilter;
}
