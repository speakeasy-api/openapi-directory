import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchChannelServerList: readonly ["https://chat.twilio.com"];
export declare class FetchChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Channel resource to fetch.
     */
    sid: string;
}
export declare class FetchChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceChannel?: shared.ChatV1ServiceChannel;
}
