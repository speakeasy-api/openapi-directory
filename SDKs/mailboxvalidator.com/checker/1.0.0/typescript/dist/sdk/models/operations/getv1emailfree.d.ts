import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Return the result in json (default) or xml format.
 */
export declare enum GetV1EmailFreeFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1EmailFreeRequest extends SpeakeasyBase {
    /**
     * The email address to check if is from a free email provider.
     */
    email: string;
    /**
     * Return the result in json (default) or xml format.
     */
    format?: GetV1EmailFreeFormatEnum;
    /**
     * API key.
     */
    key: string;
}
export declare class GetV1EmailFreeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * free email checker response
     */
    getV1EmailFree200ApplicationJSONString?: string;
}
