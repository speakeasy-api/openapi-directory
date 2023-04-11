import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
 */
export declare class AndroidInstrumentationTest extends SpeakeasyBase {
    /**
     * The java package for the test to be executed. Required
     */
    testPackageId?: string;
    /**
     * The InstrumentationTestRunner class. Required
     */
    testRunnerClass?: string;
    /**
     * Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
     */
    testTargets?: string[];
    /**
     * The flag indicates whether Android Test Orchestrator will be used to run test or not.
     */
    useOrchestrator?: boolean;
}
