import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Return the result in json (default) or xml format.
 */
export declare enum GetV1ValidationSingleFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1ValidationSingleRequest extends SpeakeasyBase {
    /**
     * The email address to be validated.
     */
    email: string;
    /**
     * Return the result in json (default) or xml format.
     */
    format?: GetV1ValidationSingleFormatEnum;
    /**
     * API key.
     */
    key: string;
}
export declare class GetV1ValidationSingleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * single email validation response
     */
    getV1ValidationSingle200ApplicationJSONString?: string;
}
