import { SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";
import { TestResult } from "./testresult";
/**
 * The response for FirebaseRulesService.TestRuleset.
 */
export declare class TestRulesetResponse extends SpeakeasyBase {
    /**
     * Syntactic and semantic `Source` issues of varying severity. Issues of `ERROR` severity will prevent tests from executing.
     */
    issues?: Issue[];
    /**
     * The set of test results given the test cases in the `TestSuite`. The results will appear in the same order as the test cases appear in the `TestSuite`.
     */
    testResults?: TestResult[];
}
