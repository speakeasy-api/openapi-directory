import { SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";
/**
 * The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
 */
export declare class BatchCreatePerfSamplesRequest extends SpeakeasyBase {
    /**
     * The set of PerfSamples to create should not include existing timestamps
     */
    perfSamples?: PerfSample[];
}
