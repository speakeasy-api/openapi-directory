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
export declare class TokenError extends SpeakeasyBase {
    accountStatus?: TokenErrorAccountStatusEnum;
    code?: string;
    help?: string;
    httpCode?: number;
    message?: string;
}
