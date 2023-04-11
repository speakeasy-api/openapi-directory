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
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the Channel resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Channel resource to fetch. This value can be either the `sid` or the `unique_name` of the Channel resource to fetch.
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
    chatV2ServiceChannel?: shared.ChatV2ServiceChannel;
}
