import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
 */
export declare class AndroidRoboTest extends SpeakeasyBase {
    /**
     * The initial activity that should be used to start the app. Optional
     */
    appInitialActivity?: string;
    /**
     * The java package for the bootstrap. Optional
     */
    bootstrapPackageId?: string;
    /**
     * The runner class for the bootstrap. Optional
     */
    bootstrapRunnerClass?: string;
    /**
     * The max depth of the traversal stack Robo can explore. Optional
     */
    maxDepth?: number;
    /**
     * The max number of steps/actions Robo can execute. Default is no limit (0). Optional
     */
    maxSteps?: number;
}
