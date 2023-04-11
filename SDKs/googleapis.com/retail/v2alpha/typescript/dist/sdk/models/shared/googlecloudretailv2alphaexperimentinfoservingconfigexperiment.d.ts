import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for active serving config A/B tests.
 */
export declare class GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment extends SpeakeasyBase {
    /**
     * The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: `projects/* /locations/* /catalogs/* /servingConfigs/*`.
     */
    experimentServingConfig?: string;
    /**
     * The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: `projects/* /locations/* /catalogs/* /servingConfigs/*`.
     */
    originalServingConfig?: string;
}
