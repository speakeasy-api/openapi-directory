import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWirelessRatePlanRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
