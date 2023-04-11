import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1beta1ObservationPeriod } from "./googlecloudpolicyanalyzerv1beta1observationperiod";
export declare class GoogleCloudPolicyanalyzerV1beta1Activity extends SpeakeasyBase {
    /**
     * A struct of custom fields to explain the activity.
     */
    activity?: Record<string, any>;
    /**
     * The type of the activity.
     */
    activityType?: string;
    /**
     * The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string;
    /**
     * Represents data observation period.
     */
    observationPeriod?: GoogleCloudPolicyanalyzerV1beta1ObservationPeriod;
}
