import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the test.
 */
export declare enum TestStatusStatusEnum {
    TestStatusUnspecified = "TEST_STATUS_UNSPECIFIED",
    Complete = "COMPLETE",
    InternalError = "INTERNAL_ERROR",
    PageUnreachable = "PAGE_UNREACHABLE"
}
/**
 * Final state of the test, including error details if necessary.
 */
export declare class TestStatus extends SpeakeasyBase {
    /**
     * Error details if applicable.
     */
    details?: string;
    /**
     * Status of the test.
     */
    status?: TestStatusStatusEnum;
}
