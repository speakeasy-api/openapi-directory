import { SpeakeasyBase } from "../../../internal/utils";
import { Outcome } from "./outcome";
import { TestSuiteOverview } from "./testsuiteoverview";
/**
 * State of the resource
 */
export declare enum MergedResultStateEnum {
    UnknownState = "unknownState",
    Pending = "pending",
    InProgress = "inProgress",
    Complete = "complete"
}
/**
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
 */
export declare class MergedResult extends SpeakeasyBase {
    /**
     * Interprets a result so that humans and machines can act on it.
     */
    outcome?: Outcome;
    /**
     * State of the resource
     */
    state?: MergedResultStateEnum;
    /**
     * The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1).
     */
    testSuiteOverviews?: TestSuiteOverview[];
}
