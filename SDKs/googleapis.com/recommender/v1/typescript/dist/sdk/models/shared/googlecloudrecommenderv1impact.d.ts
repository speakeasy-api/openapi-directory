import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1CostProjection } from "./googlecloudrecommenderv1costprojection";
import { GoogleCloudRecommenderV1ReliabilityProjection } from "./googlecloudrecommenderv1reliabilityprojection";
import { GoogleCloudRecommenderV1SecurityProjection } from "./googlecloudrecommenderv1securityprojection";
import { GoogleCloudRecommenderV1SustainabilityProjection } from "./googlecloudrecommenderv1sustainabilityprojection";
/**
 * Category that is being targeted.
 */
export declare enum GoogleCloudRecommenderV1ImpactCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}
/**
 * Contains the impact a recommendation can have for a given category.
 */
export declare class GoogleCloudRecommenderV1Impact extends SpeakeasyBase {
    /**
     * Category that is being targeted.
     */
    category?: GoogleCloudRecommenderV1ImpactCategoryEnum;
    /**
     * Contains metadata about how much money a recommendation can save or incur.
     */
    costProjection?: GoogleCloudRecommenderV1CostProjection;
    /**
     * Contains information on the impact of a reliability recommendation.
     */
    reliabilityProjection?: GoogleCloudRecommenderV1ReliabilityProjection;
    /**
     * Contains various ways of describing the impact on Security.
     */
    securityProjection?: GoogleCloudRecommenderV1SecurityProjection;
    /**
     * Contains metadata about how much sustainability a recommendation can save or incur.
     */
    sustainabilityProjection?: GoogleCloudRecommenderV1SustainabilityProjection;
}
