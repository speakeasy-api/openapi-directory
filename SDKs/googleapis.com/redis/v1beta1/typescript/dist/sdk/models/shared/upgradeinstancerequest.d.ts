import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for UpgradeInstance.
 */
export declare class UpgradeInstanceRequest extends SpeakeasyBase {
    /**
     * Required. Specifies the target version of Redis software to upgrade to.
     */
    redisVersion?: string;
}
