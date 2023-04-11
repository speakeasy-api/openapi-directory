import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CanaryDeployment represents the canary deployment configuration
 */
export declare class CanaryDeployment extends SpeakeasyBase {
    /**
     * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
     */
    percentages?: number[];
    /**
     * Whether to run verify tests after each percentage deployment.
     */
    verify?: boolean;
}
