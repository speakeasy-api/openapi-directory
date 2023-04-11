import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum {
    RiskTypeUnspecified = "RISK_TYPE_UNSPECIFIED",
    ServiceDisruption = "SERVICE_DISRUPTION",
    DataLoss = "DATA_LOSS",
    AccessDeny = "ACCESS_DENY"
}
/**
 * Contains information on the impact of a reliability recommendation.
 */
export declare class GoogleCloudRecommenderV1ReliabilityProjection extends SpeakeasyBase {
    /**
     * Per-recommender projection.
     */
    details?: Record<string, any>;
    /**
     * Reliability risks mitigated by this recommendation.
     */
    risks?: GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum[];
}
