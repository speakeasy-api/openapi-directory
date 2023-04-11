import { SpeakeasyBase } from "../../../internal/utils";
import { ShiftWorkday } from "./shiftworkday";
import { TimeRange } from "./timerange";
/**
 * Defines a filter used in a search for `Shift` records. `AND` logic is
 *
 * @remarks
 * used by Square's servers to apply each filter property specified.
 */
export declare class ShiftFilter extends SpeakeasyBase {
    /**
     * Fetch shifts for the specified employees. DEPRECATED at version 2020-08-26. Use `team_member_ids` instead.
     */
    employeeIds?: string[];
    /**
     * Represents a generic time range. The start and end values are
     *
     * @remarks
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    end?: TimeRange;
    /**
     * Fetch shifts for the specified location.
     */
    locationIds: string[];
    /**
     * Represents a generic time range. The start and end values are
     *
     * @remarks
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    start?: TimeRange;
    /**
     * Fetch a `Shift` instance by `Shift.status`.
     */
    status?: string;
    /**
     * Fetch shifts for the specified team members. Replaced `employee_ids` at version "2020-08-26".
     */
    teamMemberIds: string[];
    /**
     * A `Shift` search query filter parameter that sets a range of days that
     *
     * @remarks
     * a `Shift` must start or end in before passing the filter condition.
     */
    workday?: ShiftWorkday;
}
