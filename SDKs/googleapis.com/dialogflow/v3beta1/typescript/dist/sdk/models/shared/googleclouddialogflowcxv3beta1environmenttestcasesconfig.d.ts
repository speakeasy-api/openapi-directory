import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for continuous tests.
 */
export declare class GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig extends SpeakeasyBase {
    /**
     * Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day.
     */
    enableContinuousRun?: boolean;
    /**
     * Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false.
     */
    enablePredeploymentRun?: boolean;
    /**
     * A list of test case names to run. They should be under the same agent. Format of each test case name: `projects//locations/ /agents//testCases/`
     */
    testCases?: string[];
}
