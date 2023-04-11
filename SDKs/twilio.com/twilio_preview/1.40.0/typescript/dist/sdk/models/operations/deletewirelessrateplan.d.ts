import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteWirelessRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWirelessRatePlanRequest extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
