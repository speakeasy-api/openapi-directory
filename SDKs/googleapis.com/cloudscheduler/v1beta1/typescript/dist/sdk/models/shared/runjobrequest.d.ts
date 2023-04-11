import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for forcing a job to run now using RunJob.
 */
export declare class RunJobRequest extends SpeakeasyBase {
    /**
     * This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be forced to run instead.
     */
    legacyAppEngineCron?: boolean;
}
