import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Job scheduling options.
 */
export declare class JobScheduling extends SpeakeasyBase {
    /**
     * Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.A job may be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).
     */
    maxFailuresPerHour?: number;
    /**
     * Optional. Maximum total number of times a driver may be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).
     */
    maxFailuresTotal?: number;
}
