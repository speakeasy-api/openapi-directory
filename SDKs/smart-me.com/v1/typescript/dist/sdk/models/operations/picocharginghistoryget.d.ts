import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PicoChargingHistoryGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class PicoChargingHistoryGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    picoChargingHistoryData?: shared.PicoChargingHistoryData[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
