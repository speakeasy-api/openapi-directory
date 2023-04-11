import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TokenErrorAccountStatusEnum {
    Registered = "registered",
    EmailConfirmed = "email_confirmed",
    Deleted = "deleted",
    Suspended = "suspended",
    Rejected = "rejected",
    Approved = "approved",
    Resume = "resume",
    Webinar = "webinar",
    Course = "course"
}
/**
 * Authentication error - for vendor auth, it will also fail if their account is not approved yet. In that case, the error response will include "account_status" key.
 */
export declare class TokenError extends SpeakeasyBase {
    accountStatus?: TokenErrorAccountStatusEnum;
    code?: string;
    help?: string;
    httpCode?: number;
    message?: string;
}
