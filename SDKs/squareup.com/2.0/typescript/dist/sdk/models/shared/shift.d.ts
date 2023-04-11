import { SpeakeasyBase } from "../../../internal/utils";
import { Break } from "./break";
import { ShiftWage } from "./shiftwage";
/**
 * A record of the hourly rate, start, and end times for a single work shift
 *
 * @remarks
 * for an employee. This might include a record of the start and end times for breaks
 * taken during the shift.
 */
export declare class Shift extends SpeakeasyBase {
    /**
     * A list of all the paid or unpaid breaks that were taken during this shift.
     */
    breaks?: Break[];
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    createdAt?: string;
    /**
     * The ID of the employee this shift belongs to. DEPRECATED at version 2020-08-26. Use `team_member_id` instead.
     */
    employeeId?: string;
    /**
     * RFC 3339; shifted to the timezone + offset. Precision up to the minute is
     *
     * @remarks
     * respected; seconds are truncated.
     */
    endAt?: string;
    /**
     * The UUID for this object.
     */
    id?: string;
    /**
     * The ID of the location this shift occurred at. The location should be based on
     *
     * @remarks
     * where the employee clocked in.
     */
    locationId?: string;
    /**
     * RFC 3339; shifted to the location timezone + offset. Precision up to the
     *
     * @remarks
     * minute is respected; seconds are truncated.
     */
    startAt: string;
    /**
     * Describes the working state of the current `Shift`.
     */
    status?: string;
    /**
     * The ID of the team member this shift belongs to. Replaced `employee_id` at version "2020-08-26".
     */
    teamMemberId?: string;
    /**
     * The read-only convenience value that is calculated from the location based
     *
     * @remarks
     * on the `location_id`. Format: the IANA timezone database identifier for the
     * location timezone.
     */
    timezone?: string;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    updatedAt?: string;
    /**
     * Used for resolving concurrency issues. The request fails if the version
     *
     * @remarks
     * provided does not match the server version at the time of the request. If not provided,
     * Square executes a blind write; potentially overwriting data from another
     * write.
     */
    version?: number;
    /**
     * The hourly wage rate used to compensate an employee for this shift.
     */
    wage?: ShiftWage;
}
