import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConvertUrlRequest extends SpeakeasyBase {
    /**
     * The URL to retrieve the OpenAPI 2.0 definition from
     */
    url: string;
}
export declare class ConvertUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * default
     */
    convertUrl200ApplicationJSONAny?: any;
}
