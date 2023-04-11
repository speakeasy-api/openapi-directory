import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class GetNumbersAreacodes200ApplicationJSON extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare class GetNumbersAreacodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getNumbersAreacodes200ApplicationJSONObject?: GetNumbersAreacodes200ApplicationJSON;
}
