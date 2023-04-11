import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The MFA type that the user will use</p>
 *
 * @remarks
 * <p>The type may be conditional on the role(s) the user has</p>
 *
 */
export declare enum InviteUserRequestMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
/**
 * Will default to PAYOR if not provided but entityId is provided
 */
export declare enum InviteUserRequestUserTypeEnum {
    Backoffice = "BACKOFFICE",
    Payor = "PAYOR",
    Payee = "PAYEE"
}
/**
 * Details of User to invite
 */
export declare class InviteUserRequest extends SpeakeasyBase {
    /**
     * the email address of the invited user
     */
    email: string;
    /**
     * The payorId or payeeId or null if the user is a backoffice admin
     *
     * @remarks
     *
     */
    entityId?: string;
    firstName?: string;
    lastName?: string;
    /**
     * <p>The MFA type that the user will use</p>
     *
     * @remarks
     * <p>The type may be conditional on the role(s) the user has</p>
     *
     */
    mfaType: InviteUserRequestMfaTypeEnum;
    /**
     * The main contact number for the user
     *
     * @remarks
     *
     */
    primaryContactNumber: string;
    /**
     * The role(s) for the user
     *
     * @remarks
     * The role must exist
     * The role can be a custom role or a system role but the invoker must have the permissions to assign the role
     * System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support
     *
     */
    roles: string[];
    /**
     * The secondary contact number for the user
     *
     * @remarks
     *
     */
    secondaryContactNumber?: string;
    /**
     * The phone number of a device that the user can receive sms messages on
     *
     * @remarks
     *
     */
    smsNumber: string;
    /**
     * Will default to PAYOR if not provided but entityId is provided
     */
    userType?: InviteUserRequestUserTypeEnum;
    /**
     * Optional property that MUST be suppied when manually verifying a user
     *
     * @remarks
     * The user's smsNumber is registered via a separate endpoint and an OTP sent to them
     *
     */
    verificationCode?: string;
}
