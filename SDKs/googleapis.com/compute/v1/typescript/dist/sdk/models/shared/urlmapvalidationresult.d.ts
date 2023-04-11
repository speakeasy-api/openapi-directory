import { SpeakeasyBase } from "../../../internal/utils";
import { TestFailure } from "./testfailure";
/**
 * Message representing the validation result for a UrlMap.
 */
export declare class UrlMapValidationResult extends SpeakeasyBase {
    loadErrors?: string[];
    /**
     * Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
     */
    loadSucceeded?: boolean;
    testFailures?: TestFailure[];
    /**
     * If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.
     */
    testPassed?: boolean;
}
