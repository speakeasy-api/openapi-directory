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
    Auto = "AUTO",
    VettedPartner = "VETTED_PARTNER"
}
/**
 * The state of the verification.
 */
export declare enum VerificationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
/**
 * A verification represents a verification attempt on a location.
 */
export declare class Verification extends SpeakeasyBase {
    /**
     * Optional. Response announcement set only if the method is VETTED_PARTNER.
     */
    announcement?: string;
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
