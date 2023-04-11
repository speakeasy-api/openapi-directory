import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerReservationEnumStatusEnum } from "./workerreservationenumstatusenum";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkerReservation extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WorkerReservation resource.
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
    reservationStatus?: WorkerReservationEnumStatusEnum;
    /**
     * The unique string that we created to identify the WorkerReservation resource.
     */
    sid?: string;
    /**
     * The SID of the reserved Task resource.
     */
    taskSid?: string;
    /**
     * The absolute URL of the WorkerReservation resource.
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
     * The SID of the Workspace that this worker is contained within.
     */
    workspaceSid?: string;
}
