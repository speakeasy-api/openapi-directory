import { SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";
/**
 * A specific security risk that negatively affects the security posture of the device.
 */
export declare enum PostureDetailSecurityRiskEnum {
    SecurityRiskUnspecified = "SECURITY_RISK_UNSPECIFIED",
    UnknownOs = "UNKNOWN_OS",
    CompromisedOs = "COMPROMISED_OS",
    HardwareBackedEvaluationFailed = "HARDWARE_BACKED_EVALUATION_FAILED"
}
/**
 * Additional details regarding the security posture of the device.
 */
export declare class PostureDetail extends SpeakeasyBase {
    /**
     * Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device.
     */
    advice?: UserFacingMessage[];
    /**
     * A specific security risk that negatively affects the security posture of the device.
     */
    securityRisk?: PostureDetailSecurityRiskEnum;
}
