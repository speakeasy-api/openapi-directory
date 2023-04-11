import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class SearchTeamMembersFilter extends SpeakeasyBase {
    /**
     * When present, filters by team members assigned to the specified locations.
     *
     * @remarks
     * When empty, includes team members assigned to any location.
     */
    locationIds?: string[];
    /**
     * When present, filters by team members who match the given status.
     *
     * @remarks
     * When empty, includes team members of all statuses.
     */
    status?: string;
}
