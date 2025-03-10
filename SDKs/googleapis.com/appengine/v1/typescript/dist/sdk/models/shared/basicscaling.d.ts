import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
 */
export declare class BasicScaling extends SpeakeasyBase {
    /**
     * Duration of time after the last request that an instance must wait before the instance is shut down.
     */
    idleTimeout?: string;
    /**
     * Maximum number of instances to create for this version.
     */
    maxInstances?: number;
}
