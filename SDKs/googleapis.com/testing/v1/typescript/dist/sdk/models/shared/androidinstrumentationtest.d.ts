import { SpeakeasyBase } from "../../../internal/utils";
import { AppBundle } from "./appbundle";
import { FileReference } from "./filereference";
import { ShardingOption } from "./shardingoption";
/**
 * The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.
 */
export declare enum AndroidInstrumentationTestOrchestratorOptionEnum {
    OrchestratorOptionUnspecified = "ORCHESTRATOR_OPTION_UNSPECIFIED",
    UseOrchestrator = "USE_ORCHESTRATOR",
    DoNotUseOrchestrator = "DO_NOT_USE_ORCHESTRATOR"
}
/**
 * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
 */
export declare class AndroidInstrumentationTest extends SpeakeasyBase {
    /**
     * A reference to a file, used for user inputs.
     */
    appApk?: FileReference;
    /**
     * An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
     */
    appBundle?: AppBundle;
    /**
     * The java package for the application under test. The default value is determined by examining the application's manifest.
     */
    appPackageId?: string;
    /**
     * The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.
     */
    orchestratorOption?: AndroidInstrumentationTestOrchestratorOptionEnum;
    /**
     * Options for enabling sharding.
     */
    shardingOption?: ShardingOption;
    /**
     * A reference to a file, used for user inputs.
     */
    testApk?: FileReference;
    /**
     * The java package for the test to be executed. The default value is determined by examining the application's manifest.
     */
    testPackageId?: string;
    /**
     * The InstrumentationTestRunner class. The default value is determined by examining the application's manifest.
     */
    testRunnerClass?: string;
    /**
     * Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
     */
    testTargets?: string[];
}
