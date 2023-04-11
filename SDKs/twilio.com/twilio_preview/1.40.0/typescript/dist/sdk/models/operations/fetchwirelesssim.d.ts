import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWirelessSimServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWirelessSimRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessSim?: shared.PreviewWirelessSim;
}
