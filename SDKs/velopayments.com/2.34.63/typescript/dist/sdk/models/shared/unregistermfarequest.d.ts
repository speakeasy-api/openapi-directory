import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the MFA device
 */
export declare enum UnregisterMFARequestMFATypeEnum {
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
/**
 * The MFA Type to unregister
 */
export declare class UnregisterMFARequest extends SpeakeasyBase {
    /**
     * The type of the MFA device
     */
    mfaType: UnregisterMFARequestMFATypeEnum;
    /**
     * <p>Optional property that MUST be suppied when manually verifying a user</p>
     *
     * @remarks
     * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
     *
     */
    verificationCode?: string;
}
