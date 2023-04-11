import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the security policy applied to the attached resource.
 */
export declare enum GoogleCloudDataplexV1AssetSecurityStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Applying = "APPLYING",
    Error = "ERROR"
}
/**
 * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
 */
export declare class GoogleCloudDataplexV1AssetSecurityStatus extends SpeakeasyBase {
    /**
     * Additional information about the current state.
     */
    message?: string;
    /**
     * The current state of the security policy applied to the attached resource.
     */
    state?: GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
    /**
     * Last update time of the status.
     */
    updateTime?: string;
}
