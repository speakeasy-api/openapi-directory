import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchOriginationUrlServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchOriginationUrlSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchOriginationUrlRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the OriginationUrl resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to fetch the OriginationUrl.
     */
    trunkSid: string;
}
export declare class FetchOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
