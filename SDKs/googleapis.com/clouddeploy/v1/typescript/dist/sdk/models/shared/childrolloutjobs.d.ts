import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * ChildRollouts job composition
 */
export declare class ChildRolloutJobs extends SpeakeasyBase {
    /**
     * Output only. List of AdvanceChildRolloutJobs
     */
    advanceRolloutJobs?: Job[];
    /**
     * Output only. List of CreateChildRolloutJobs
     */
    createRolloutJobs?: Job[];
}
