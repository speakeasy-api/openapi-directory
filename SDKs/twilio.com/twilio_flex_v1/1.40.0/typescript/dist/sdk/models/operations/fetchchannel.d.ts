import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the Flex chat channel resource to fetch.
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
    flexV1Channel?: shared.FlexV1Channel;
}
