import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAlertServerList: readonly ["https://monitor.twilio.com"];
export declare class FetchAlertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAlertRequest extends SpeakeasyBase {
    /**
     * The SID of the Alert resource to fetch.
     */
    sid: string;
}
export declare class FetchAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    monitorV1AlertInstance?: shared.MonitorV1AlertInstance;
}
