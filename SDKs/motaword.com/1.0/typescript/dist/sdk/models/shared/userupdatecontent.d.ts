import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notification settings
**/
export declare class UserUpdateContentNotifications extends SpeakeasyBase {
    phoneNumber?: string;
    smsEnabled?: boolean;
}
export declare class UserUpdateContent extends SpeakeasyBase {
    birthday?: Date;
    city?: string;
    country?: string;
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    notifications?: UserUpdateContentNotifications;
    notify?: boolean;
    paypalEmail?: string;
    phone?: string;
    require1099?: boolean;
    state?: string;
    street?: string;
    userGroups?: number[];
    zip?: string;
}
