import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum {
    AggregatedTestResultUnspecified = "AGGREGATED_TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
 */
export declare class GoogleCloudDialogflowCxV3beta1ContinuousTestResult extends SpeakeasyBase {
    /**
     * The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`.
     */
    name?: string;
    /**
     * The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not.
     */
    result?: GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum;
    /**
     * Time when the continuous testing run starts.
     */
    runTime?: string;
    /**
     * A list of individual test case results names in this continuous test run.
     */
    testCaseResults?: string[];
}
