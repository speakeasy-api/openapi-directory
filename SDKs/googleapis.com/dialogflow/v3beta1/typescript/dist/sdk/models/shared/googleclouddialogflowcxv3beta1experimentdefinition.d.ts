import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";
/**
 * Definition of the experiment.
 */
export declare class GoogleCloudDialogflowCxV3beta1ExperimentDefinition extends SpeakeasyBase {
    /**
     * The condition defines which subset of sessions are selected for this experiment. If not specified, all sessions are eligible. E.g. "query_input.language_code=en" See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
     */
    condition?: string;
    /**
     * A list of flow version variants.
     */
    versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
