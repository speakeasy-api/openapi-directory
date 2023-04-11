import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSimServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSimRequest extends SpeakeasyBase {
    /**
     * The SID of the Sim resource to fetch.
     */
    sid: string;
}
export declare class FetchSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1Sim?: shared.SupersimV1Sim;
}
