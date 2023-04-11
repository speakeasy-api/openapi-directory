import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Network Access Profile resource.
     */
    networkAccessProfileSid: string;
    /**
     * The SID of the Network resource to fetch.
     */
    sid: string;
}
export declare class FetchNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
