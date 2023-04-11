import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateWirelessRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateWirelessRatePlanRequest extends SpeakeasyBase {
    requestBody?: UpdateWirelessRatePlanUpdateWirelessRatePlanRequest;
    sid: string;
}
export declare class UpdateWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
