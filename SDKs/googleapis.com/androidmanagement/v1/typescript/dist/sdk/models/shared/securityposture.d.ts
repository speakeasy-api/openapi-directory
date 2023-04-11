import { SpeakeasyBase } from "../../../internal/utils";
import { PostureDetail } from "./posturedetail";
/**
 * Device's security posture value.
 */
export declare enum SecurityPostureDevicePostureEnum {
    PostureUnspecified = "POSTURE_UNSPECIFIED",
    Secure = "SECURE",
    AtRisk = "AT_RISK",
    PotentiallyCompromised = "POTENTIALLY_COMPROMISED"
}
/**
 * The security posture of the device, as determined by the current device state and the policies applied.
 */
export declare class SecurityPosture extends SpeakeasyBase {
    /**
     * Device's security posture value.
     */
    devicePosture?: SecurityPostureDevicePostureEnum;
    /**
     * Additional details regarding the security posture of the device.
     */
    postureDetails?: PostureDetail[];
}
