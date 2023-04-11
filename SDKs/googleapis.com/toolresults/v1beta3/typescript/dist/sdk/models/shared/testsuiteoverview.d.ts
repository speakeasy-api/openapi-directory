import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { FileReference } from "./filereference";
/**
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
 */
export declare class TestSuiteOverview extends SpeakeasyBase {
    /**
     *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
     */
    elapsedTime?: Duration;
    /**
     * Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    errorCount?: number;
    /**
     * Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never
     */
    failureCount?: number;
    /**
     * Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases.
     */
    flakyCount?: number;
    /**
     * The name of the test suite. - In create/response: always set - In update request: never
     */
    name?: string;
    /**
     * Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    skippedCount?: number;
    /**
     * Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    totalCount?: number;
    /**
     * A reference to a file.
     */
    xmlSource?: FileReference;
}
