import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProjectCosts } from "./continuousprojectcosts";
import { ContinuousProjectWordCounts } from "./continuousprojectwordcounts";
import { Progress } from "./progress";
/**
 * Progress information
 */
export declare class ContinuousProjectProgress extends SpeakeasyBase {
    costs?: ContinuousProjectCosts;
    progress?: Progress;
    wordCounts?: ContinuousProjectWordCounts;
}
