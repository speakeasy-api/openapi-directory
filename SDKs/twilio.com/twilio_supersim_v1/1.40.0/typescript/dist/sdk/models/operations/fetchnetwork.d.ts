import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchNetworkRequest extends SpeakeasyBase {
    /**
     * The SID of the Network resource to fetch.
     */
    sid: string;
}
export declare class FetchNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1Network?: shared.SupersimV1Network;
}
