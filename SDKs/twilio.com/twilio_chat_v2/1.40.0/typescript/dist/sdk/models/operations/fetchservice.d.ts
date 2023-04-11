import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceServerList: readonly ["https://chat.twilio.com"];
export declare class FetchServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceRequest extends SpeakeasyBase {
    /**
     * The SID of the Service resource to fetch.
     */
    sid: string;
}
export declare class FetchServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2Service?: shared.ChatV2Service;
}
