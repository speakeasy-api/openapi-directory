import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QUIC policy for the TargetHttpsProxy resource.
 */
export declare enum TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum {
    Disable = "DISABLE",
    Enable = "ENABLE",
    None = "NONE"
}
export declare class TargetHttpsProxiesSetQuicOverrideRequest extends SpeakeasyBase {
    /**
     * QUIC policy for the TargetHttpsProxy resource.
     */
    quicOverride?: TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum;
}
