import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default.
 */
export declare enum FailoverInstanceRequestDataProtectionModeEnum {
    DataProtectionModeUnspecified = "DATA_PROTECTION_MODE_UNSPECIFIED",
    LimitedDataLoss = "LIMITED_DATA_LOSS",
    ForceDataLoss = "FORCE_DATA_LOSS"
}
/**
 * Request for Failover.
 */
export declare class FailoverInstanceRequest extends SpeakeasyBase {
    /**
     * Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default.
     */
    dataProtectionMode?: FailoverInstanceRequestDataProtectionModeEnum;
}
