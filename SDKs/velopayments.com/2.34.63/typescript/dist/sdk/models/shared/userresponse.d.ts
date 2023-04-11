import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * The status of the MFA device
 */
export declare enum UserResponseMfaStatusEnum {
    Registered = "REGISTERED",
    Unregistered = "UNREGISTERED"
}
/**
 * The type of the MFA device
 */
export declare enum UserResponseMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
/**
 * The status of the user
 *
 * @remarks
 * when the user has been invited but not yet enrolled they will have a PENDING status
 *
 */
export declare enum UserResponseStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Pending = "PENDING"
}
/**
 * Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE.
 */
export declare enum UserResponseUserTypeEnum {
    Backoffice = "BACKOFFICE",
    Payor = "PAYOR",
    Payee = "PAYEE"
}
/**
 * Get User Details
 */
export declare class UserResponse extends SpeakeasyBase {
    /**
     * The payor or payee company name or null if the user is not a payor or payee user
     *
     * @remarks
     *
     */
    companyName?: string;
    /**
     * the email address of the user
     */
    email?: string;
    /**
     * The payorId or payeeId or null if the user is not a payor or payee user
     *
     * @remarks
     *
     */
    entityId?: string;
    firstName?: string;
    /**
     * The id of the user
     */
    id?: string;
    lastName?: string;
    /**
     * If true the user is currently locked out and unable to log in
     */
    lockedOut?: boolean;
    /**
     * A timestamp showing when the user was locked out
     *
     * @remarks
     * If null then the user is not currently locked out
     *
     */
    lockedOutTimestamp?: Date;
    /**
     * The status of the MFA device
     */
    mfaStatus?: UserResponseMfaStatusEnum;
    /**
     * The type of the MFA device
     */
    mfaType?: UserResponseMfaTypeEnum;
    /**
     * The main contact number for the user
     *
     * @remarks
     *
     */
    primaryContactNumber?: string;
    /**
     * The role(s) for the user
     *
     * @remarks
     *
     */
    roles?: Role[];
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
    smsNumber?: string;
    /**
     * The status of the user
     *
     * @remarks
     * when the user has been invited but not yet enrolled they will have a PENDING status
     *
     */
    status?: UserResponseStatusEnum;
    /**
     * Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE.
     */
    userType?: UserResponseUserTypeEnum;
}
