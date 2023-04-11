import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Successful Response
 */
export declare class GetTheStatusOfTheAPIService200ApplicationJSON extends SpeakeasyBase {
    status?: boolean;
}
export declare class GetTheStatusOfTheAPIServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    getTheStatusOfTheAPIService200ApplicationJSONObject?: GetTheStatusOfTheAPIService200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
