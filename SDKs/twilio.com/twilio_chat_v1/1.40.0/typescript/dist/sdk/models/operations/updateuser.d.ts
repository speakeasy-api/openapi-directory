import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the resource. It is often used for display purposes.
     */
    friendlyName?: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to this user.
     */
    roleSid?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the User resource to update.
     */
    sid: string;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceUser?: shared.ChatV1ServiceUser;
}
