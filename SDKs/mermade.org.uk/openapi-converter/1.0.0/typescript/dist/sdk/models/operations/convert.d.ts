import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum ConvertRequestBodyValidateEnum {
    On = "on"
}
export declare class ConvertRequestBody extends SpeakeasyBase {
    /**
     * The file to upload and convert
     */
    filename?: string;
    /**
     * The text of a Swagger 2.0 definition to convert
     */
    source?: string;
    validate?: ConvertRequestBodyValidateEnum;
}
export declare class ConvertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * default
     */
    convert200ApplicationJSONAny?: any;
    /**
     * Invalid request
     */
    convert400ApplicationJSONAny?: any;
}
