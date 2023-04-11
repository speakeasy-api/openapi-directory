import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for manually scaling a model.
 */
export declare class GoogleCloudMlV1ManualScaling extends SpeakeasyBase {
    /**
     * The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.
     */
    nodes?: number;
}
