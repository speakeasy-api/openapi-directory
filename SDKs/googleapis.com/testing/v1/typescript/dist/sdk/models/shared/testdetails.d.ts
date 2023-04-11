import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional details about the progress of the running test.
 */
export declare class TestDetails extends SpeakeasyBase {
    /**
     * Output only. If the TestState is ERROR, then this string will contain human-readable details about the error.
     */
    errorMessage?: string;
    /**
     * Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages.
     */
    progressMessages?: string[];
}
