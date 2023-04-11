import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchWebChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWebChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the WebChannel resource to fetch.
     */
    sid: string;
}
export declare class FetchWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
