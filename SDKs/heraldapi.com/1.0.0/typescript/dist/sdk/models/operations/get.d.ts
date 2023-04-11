import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class Get200ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    get200ApplicationJSONObject?: Get200ApplicationJSON;
}
