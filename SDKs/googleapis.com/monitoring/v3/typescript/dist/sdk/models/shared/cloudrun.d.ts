import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Run service. Learn more at https://cloud.google.com/run.
 */
export declare class CloudRun extends SpeakeasyBase {
    /**
     * The location the service is run. Corresponds to the location resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision).
     */
    location?: string;
    /**
     * The name of the Cloud Run service. Corresponds to the service_name resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision).
     */
    serviceName?: string;
}
