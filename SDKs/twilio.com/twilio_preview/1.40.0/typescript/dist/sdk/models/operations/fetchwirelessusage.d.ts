import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWirelessUsageServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessUsageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWirelessUsageRequest extends SpeakeasyBase {
    end?: string;
    simSid: string;
    start?: string;
}
export declare class FetchWirelessUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessSimUsage?: shared.PreviewWirelessSimUsage;
}
