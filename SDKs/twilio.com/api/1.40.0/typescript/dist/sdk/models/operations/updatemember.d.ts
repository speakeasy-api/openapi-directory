import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMemberServerList: readonly ["https://api.twilio.com"];
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters.
 */
export declare enum UpdateMemberUpdateMemberRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    /**
     * How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters.
     */
    method?: UpdateMemberUpdateMemberRequestMethodEnum;
    /**
     * The absolute URL of the Queue resource.
     */
    url: string;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to update.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to update.
     */
    callSid: string;
    /**
     * The SID of the Queue in which to find the members to update.
     */
    queueSid: string;
    requestBody?: UpdateMemberUpdateMemberRequest;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
