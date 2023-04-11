import { SpeakeasyBase } from "../../../internal/utils";
import { TaskReservationEnumStatusEnum } from "./taskreservationenumstatusenum";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceTaskTaskReservation extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskReservation resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    reservationStatus?: TaskReservationEnumStatusEnum;
    /**
     * The unique string that we created to identify the TaskReservation resource.
     */
    sid?: string;
    /**
     * The SID of the reserved Task resource.
     */
    taskSid?: string;
    /**
     * The absolute URL of the TaskReservation reservation.
     */
    url?: string;
    /**
     * The `friendly_name` of the Worker that is reserved.
     */
    workerName?: string;
    /**
     * The SID of the reserved Worker resource.
     */
    workerSid?: string;
    /**
     * The SID of the Workspace that this task is contained within.
     */
    workspaceSid?: string;
}
