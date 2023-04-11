import { SpeakeasyBase } from "../../../internal/utils";
import { TestIssue } from "./testissue";
import { TestSuiteOverview } from "./testsuiteoverview";
import { TestTiming } from "./testtiming";
import { ToolExecution } from "./toolexecution";
/**
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
 */
export declare class TestExecutionStep extends SpeakeasyBase {
    /**
     * Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional
     */
    testIssues?: TestIssue[];
    /**
     * List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)
     */
    testSuiteOverviews?: TestSuiteOverview[];
    /**
     * Testing timing break down to know phases.
     */
    testTiming?: TestTiming;
    /**
     * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
     */
    toolExecution?: ToolExecution;
}
