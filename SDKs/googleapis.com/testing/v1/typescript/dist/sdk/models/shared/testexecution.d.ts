import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { Shard } from "./shard";
import { TestDetails } from "./testdetails";
import { TestSpecification } from "./testspecification";
import { ToolResultsStep } from "./toolresultsstep";
/**
 * Output only. Indicates the current progress of the test execution (e.g., FINISHED).
 */
export declare enum TestExecutionStateEnum {
    TestStateUnspecified = "TEST_STATE_UNSPECIFIED",
    Validating = "VALIDATING",
    Pending = "PENDING",
    Running = "RUNNING",
    Finished = "FINISHED",
    Error = "ERROR",
    UnsupportedEnvironment = "UNSUPPORTED_ENVIRONMENT",
    IncompatibleEnvironment = "INCOMPATIBLE_ENVIRONMENT",
    IncompatibleArchitecture = "INCOMPATIBLE_ARCHITECTURE",
    Cancelled = "CANCELLED",
    Invalid = "INVALID"
}
/**
 * A single test executed in a single environment.
 */
export declare class TestExecution extends SpeakeasyBase {
    /**
     * The environment in which the test is run.
     */
    environment?: Environment;
    /**
     * Output only. Unique id set by the service.
     */
    id?: string;
    /**
     * Output only. Id of the containing TestMatrix.
     */
    matrixId?: string;
    /**
     * Output only. The cloud project that owns the test execution.
     */
    projectId?: string;
    /**
     * Output only. Details about the shard.
     */
    shard?: Shard;
    /**
     * Output only. Indicates the current progress of the test execution (e.g., FINISHED).
     */
    state?: TestExecutionStateEnum;
    /**
     * Additional details about the progress of the running test.
     */
    testDetails?: TestDetails;
    /**
     * A description of how to run the test.
     */
    testSpecification?: TestSpecification;
    /**
     * Output only. The time this test execution was initially created.
     */
    timestamp?: string;
    /**
     * Represents a tool results step resource. This has the results of a TestExecution.
     */
    toolResultsStep?: ToolResultsStep;
}
