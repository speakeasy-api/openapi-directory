import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchQueueServerList: readonly ["https://api.twilio.com"];
export declare class FetchQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Queue resource to fetch
     */
    sid: string;
}
export declare class FetchQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}
