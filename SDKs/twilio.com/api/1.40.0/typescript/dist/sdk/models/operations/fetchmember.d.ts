import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMemberServerList: readonly ["https://api.twilio.com"];
export declare class FetchMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMemberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to fetch.
     */
    callSid: string;
    /**
     * The SID of the Queue in which to find the members to fetch.
     */
    queueSid: string;
}
export declare class FetchMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
