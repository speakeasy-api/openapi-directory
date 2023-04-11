import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PicoChargingGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class PicoChargingGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    picoChargingData?: shared.PicoChargingData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
