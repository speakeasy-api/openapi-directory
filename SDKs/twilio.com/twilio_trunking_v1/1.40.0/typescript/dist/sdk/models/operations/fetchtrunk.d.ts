import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrunkRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Trunk resource to fetch.
     */
    sid: string;
}
export declare class FetchTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
