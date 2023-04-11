import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notification settings
 */
export declare class UserUpdateContentNotifications extends SpeakeasyBase {
    /**
     * User phone number
     */
    phoneNumber?: string;
    /**
     * User sms notification setting
     */
    smsEnabled?: boolean;
}
export declare class UserUpdateContent extends SpeakeasyBase {
    birthday?: Date;
    city?: string;
    country?: string;
    /**
     * Optional. User e-mail.
     */
    email?: string;
    /**
     * Optional. User first name.
     */
    firstName?: string;
    /**
     * Optional. ID of the user being updated.
     */
    id?: number;
    /**
     * Optional. User last name.
     */
    lastName?: string;
    /**
     * Notification settings
     */
    notifications?: UserUpdateContentNotifications;
    /**
     * Notify new user account creation with login information and MotaWord introduction.
     */
    notify?: boolean;
    /**
     * Optional. Vendor paypal e-mail
     */
    paypalEmail?: string;
    phone?: string;
    /**
     * Optional. Whether this vendor requires 1099 form in US for their earnings.
     */
    require1099?: boolean;
    state?: string;
    street?: string;
    /**
     * A list of user group IDs
     */
    userGroups?: number[];
    zip?: string;
}
