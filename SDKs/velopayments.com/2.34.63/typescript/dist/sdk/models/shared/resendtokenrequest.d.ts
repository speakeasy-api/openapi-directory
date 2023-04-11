import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the token to resend
 */
export declare enum ResendTokenRequestTokenTypeEnum {
    InviteMfaUser = "INVITE_MFA_USER",
    MfaRegistration = "MFA_REGISTRATION"
}
/**
 * The type of token to resend
 */
export declare class ResendTokenRequest extends SpeakeasyBase {
    /**
     * The type of the token to resend
     */
    tokenType: ResendTokenRequestTokenTypeEnum;
    /**
     * <p>Optional property that MUST be suppied when manually verifying a user</p>
     *
     * @remarks
     * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
     *
     */
    verificationCode?: string;
}
