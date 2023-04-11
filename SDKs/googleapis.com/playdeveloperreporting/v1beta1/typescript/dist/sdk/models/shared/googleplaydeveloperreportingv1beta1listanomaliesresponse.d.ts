import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1Anomaly } from "./googleplaydeveloperreportingv1beta1anomaly";
/**
 * Response with a list of anomalies in datasets.
 */
export declare class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse extends SpeakeasyBase {
    /**
     * Anomalies that were found.
     */
    anomalies?: GooglePlayDeveloperReportingV1beta1Anomaly[];
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string;
}
