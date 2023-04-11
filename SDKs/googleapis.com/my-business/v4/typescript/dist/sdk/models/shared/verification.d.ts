import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The method of the verification.
 */
export declare enum VerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}
/**
 * The state of the verification.
 */
export declare enum VerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
/**
 * A verification represents a verification attempt on a location.
 */
export declare class Verification extends SpeakeasyBase {
    /**
     * The timestamp when the verification is requested.
     */
    createTime?: string;
    /**
     * The method of the verification.
     */
    method?: VerificationMethodEnum;
    /**
     * Resource name of the verification.
     */
    name?: string;
    /**
     * The state of the verification.
     */
    state?: VerificationStateEnum;
}
