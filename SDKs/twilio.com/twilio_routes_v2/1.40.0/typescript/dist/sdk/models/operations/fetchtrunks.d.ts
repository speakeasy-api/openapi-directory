import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrunksServerList: readonly ["https://routes.twilio.com"];
export declare class FetchTrunksSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrunksRequest extends SpeakeasyBase {
    /**
     * The absolute URL of the SIP Trunk
     */
    sipTrunkDomain: string;
}
export declare class FetchTrunksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    routesV2Trunks?: shared.RoutesV2Trunks;
}
