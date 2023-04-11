import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the MFA device
 */
export declare enum SelfMFATypeUnregisterRequestMFATypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
/**
 * The MFA Type to unregister
 */
export declare class SelfMFATypeUnregisterRequest extends SpeakeasyBase {
    /**
     * The type of the MFA device
     */
    mfaType: SelfMFATypeUnregisterRequestMFATypeEnum;
}
