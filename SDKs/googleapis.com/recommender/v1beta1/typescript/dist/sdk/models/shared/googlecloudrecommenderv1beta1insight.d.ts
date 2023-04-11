import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1InsightRecommendationReference } from "./googlecloudrecommenderv1beta1insightrecommendationreference";
import { GoogleCloudRecommenderV1beta1InsightStateInfo } from "./googlecloudrecommenderv1beta1insightstateinfo";
/**
 * Category being targeted by the insight.
 */
export declare enum GoogleCloudRecommenderV1beta1InsightCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}
/**
 * Insight's severity.
 */
export declare enum GoogleCloudRecommenderV1beta1InsightSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
 */
export declare class GoogleCloudRecommenderV1beta1Insight extends SpeakeasyBase {
    /**
     * Recommendations derived from this insight.
     */
    associatedRecommendations?: GoogleCloudRecommenderV1beta1InsightRecommendationReference[];
    /**
     * Category being targeted by the insight.
     */
    category?: GoogleCloudRecommenderV1beta1InsightCategoryEnum;
    /**
     * A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"
     */
    content?: Record<string, any>;
    /**
     * Free-form human readable summary in English. The maximum length is 500 characters.
     */
    description?: string;
    /**
     * Fingerprint of the Insight. Provides optimistic locking when updating states.
     */
    etag?: string;
    /**
     * Insight subtype. Insight content schema will be stable for a given subtype.
     */
    insightSubtype?: string;
    /**
     * Timestamp of the latest data used to generate the insight.
     */
    lastRefreshTime?: string;
    /**
     * Name of the insight.
     */
    name?: string;
    /**
     * Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).
     */
    observationPeriod?: string;
    /**
     * Insight's severity.
     */
    severity?: GoogleCloudRecommenderV1beta1InsightSeverityEnum;
    /**
     * Information related to insight state.
     */
    stateInfo?: GoogleCloudRecommenderV1beta1InsightStateInfo;
    /**
     * Fully qualified resource names that this insight is targeting.
     */
    targetResources?: string[];
}
