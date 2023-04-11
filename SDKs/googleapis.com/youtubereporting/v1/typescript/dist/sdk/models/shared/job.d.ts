import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A job creating reports of a specific type.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * The creation date/time of the job.
     */
    createTime?: string;
    /**
     * The date/time when this job will expire/expired. After a job expired, no new reports are generated.
     */
    expireTime?: string;
    /**
     * The server-generated ID of the job (max. 40 characters).
     */
    id?: string;
    /**
     * The name of the job (max. 100 characters).
     */
    name?: string;
    /**
     * The type of reports this job creates. Corresponds to the ID of a ReportType.
     */
    reportTypeId?: string;
    /**
     * True if this a system-managed job that cannot be modified by the user; otherwise false.
     */
    systemManaged?: boolean;
}
