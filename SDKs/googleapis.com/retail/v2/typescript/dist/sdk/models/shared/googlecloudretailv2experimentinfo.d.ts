import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ExperimentInfoServingConfigExperiment } from "./googlecloudretailv2experimentinfoservingconfigexperiment";
/**
 * Metadata for active A/B testing Experiments.
 */
export declare class GoogleCloudRetailV2ExperimentInfo extends SpeakeasyBase {
    /**
     * The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: `projects/* /locations/global/catalogs/default_catalog/experiments/experiment_id`
     */
    experimentName?: string;
    /**
     * Metadata for active serving config A/B tests.
     */
    servingConfigExperiment?: GoogleCloudRetailV2ExperimentInfoServingConfigExperiment;
}
