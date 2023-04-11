import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1CostProjection } from "./googlecloudrecommenderv1beta1costprojection";
import { GoogleCloudRecommenderV1beta1ReliabilityProjection } from "./googlecloudrecommenderv1beta1reliabilityprojection";
import { GoogleCloudRecommenderV1beta1SecurityProjection } from "./googlecloudrecommenderv1beta1securityprojection";
import { GoogleCloudRecommenderV1beta1SustainabilityProjection } from "./googlecloudrecommenderv1beta1sustainabilityprojection";
/**
 * Category that is being targeted.
 */
export declare enum GoogleCloudRecommenderV1beta1ImpactCategoryEnum {
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
export declare class GoogleCloudRecommenderV1beta1Impact extends SpeakeasyBase {
    /**
     * Category that is being targeted.
     */
    category?: GoogleCloudRecommenderV1beta1ImpactCategoryEnum;
    /**
     * Contains metadata about how much money a recommendation can save or incur.
     */
    costProjection?: GoogleCloudRecommenderV1beta1CostProjection;
    /**
     * Contains information on the impact of a reliability recommendation.
     */
    reliabilityProjection?: GoogleCloudRecommenderV1beta1ReliabilityProjection;
    /**
     * Contains various ways of describing the impact on Security.
     */
    securityProjection?: GoogleCloudRecommenderV1beta1SecurityProjection;
    /**
     * Contains metadata about how much sustainability a recommendation can save or incur.
     */
    sustainabilityProjection?: GoogleCloudRecommenderV1beta1SustainabilityProjection;
}
