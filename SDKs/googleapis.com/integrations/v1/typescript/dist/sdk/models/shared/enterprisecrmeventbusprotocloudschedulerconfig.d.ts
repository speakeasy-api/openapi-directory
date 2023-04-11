import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Scheduler Trigger configuration
 */
export declare class EnterpriseCrmEventbusProtoCloudSchedulerConfig extends SpeakeasyBase {
    /**
     * Required. The cron tab of cloud scheduler trigger.
     */
    cronTab?: string;
    /**
     * Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations
     */
    errorMessage?: string;
    /**
     * Required. The location where associated cloud scheduler job will be created
     */
    location?: string;
    /**
     * Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time
     */
    serviceAccountEmail?: string;
}
