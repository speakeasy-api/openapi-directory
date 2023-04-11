import { SpeakeasyBase } from "../../../internal/utils";
import { JobAssignment } from "./jobassignment";
/**
 * An object representing a team member's wage information.
 */
export declare class WageSetting extends SpeakeasyBase {
    /**
     * The timestamp, in RFC 3339 format, describing when the wage setting object was created.
     *
     * @remarks
     * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
     */
    createdAt?: string;
    /**
     * Whether the team member is exempt from the overtime rules of the seller's country.
     */
    isOvertimeExempt?: boolean;
    /**
     * Required. The ordered list of jobs that the team member is assigned to.
     *
     * @remarks
     * The first job assignment is considered the team member's primary job.
     *
     * The minimum length is 1 and the maximum length is 12.
     */
    jobAssignments?: JobAssignment[];
    /**
     * The unique ID of the `TeamMember` whom this wage setting describes.
     */
    teamMemberId?: string;
    /**
     * The timestamp, in RFC 3339 format, describing when the wage setting object was last updated.
     *
     * @remarks
     * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
     */
    updatedAt?: string;
    /**
     * Used for resolving concurrency issues. The request fails if the version
     *
     * @remarks
     * provided does not match the server version at the time of the request. If not provided,
     * Square executes a blind write, potentially overwriting data from another write. For more information,
     * see [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency).
     */
    version?: number;
}
