import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1RecommenderGenerationConfig } from "./googlecloudrecommenderv1beta1recommendergenerationconfig";
/**
 * Configuration for a Recommender.
 */
export declare class GoogleCloudRecommenderV1beta1RecommenderConfigInput extends SpeakeasyBase {
    /**
     * Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: Record<string, string>;
    /**
     * A user-settable field to provide a human-readable name to be used in user interfaces.
     */
    displayName?: string;
    /**
     * Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.
     */
    etag?: string;
    /**
     * Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string;
    /**
     * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
     */
    recommenderGenerationConfig?: GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
    /**
     * Last time when the config was updated.
     */
    updateTime?: string;
}
/**
 * Configuration for a Recommender.
 */
export declare class GoogleCloudRecommenderV1beta1RecommenderConfig extends SpeakeasyBase {
    /**
     * Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: Record<string, string>;
    /**
     * A user-settable field to provide a human-readable name to be used in user interfaces.
     */
    displayName?: string;
    /**
     * Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.
     */
    etag?: string;
    /**
     * Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string;
    /**
     * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
     */
    recommenderGenerationConfig?: GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
    /**
     * Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.
     */
    revisionId?: string;
    /**
     * Last time when the config was updated.
     */
    updateTime?: string;
}
