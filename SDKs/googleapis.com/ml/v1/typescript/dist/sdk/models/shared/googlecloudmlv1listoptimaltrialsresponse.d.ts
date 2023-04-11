import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";
/**
 * The response message for the ListOptimalTrials method.
 */
export declare class GoogleCloudMlV1ListOptimalTrialsResponse extends SpeakeasyBase {
    /**
     * The pareto-optimal trials for multiple objective study or the optimal trial for single objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
     */
    trials?: GoogleCloudMlV1Trial[];
}
