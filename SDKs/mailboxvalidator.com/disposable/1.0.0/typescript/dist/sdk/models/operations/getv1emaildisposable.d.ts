import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Return the result in json (default) or xml format.
 */
export declare enum GetV1EmailDisposableFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1EmailDisposableRequest extends SpeakeasyBase {
    /**
     * The email address to check if is from a disposable email provider.
     */
    email: string;
    /**
     * Return the result in json (default) or xml format.
     */
    format?: GetV1EmailDisposableFormatEnum;
    /**
     * API key.
     */
    key: string;
}
export declare class GetV1EmailDisposableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * disposable email checker response
     */
    getV1EmailDisposable200ApplicationJSONString?: string;
}
