import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportUserRequestBody extends SpeakeasyBase {
    /**
     * The ID of the group to report the user to.  This may be disregarded in cases where user_email is set and can be used to automatically identify which group the user should be reported to (because some email addresses are specific to certain groups).
     *
     * @remarks
     *
     */
    groupId?: string;
    /**
     * The body of the message.
     */
    message: string;
    /**
     * The subject of the message.
     */
    subject?: string;
    /**
     * The email of the user to report.  Often users only know to identify other users by their email addresses so allowing users to enter an email address can be easier in certain cases.
     *
     * @remarks
     *
     */
    userEmail?: string;
    /**
     * The ID of the user to report.  One of user_id or user_email must be passed but only user_id will be used if both are passed.
     */
    userId?: string;
}
export declare class ReportUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
