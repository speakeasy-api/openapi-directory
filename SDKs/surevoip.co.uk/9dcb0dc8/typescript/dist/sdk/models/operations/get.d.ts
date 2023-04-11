import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Content Type
 */
export declare enum GetContentTypeEnum {
    ApplicationJson = "application/json",
    TextHtml = "text/html",
    TextXml = "text/xml",
    ApplicationXml = "application/xml"
}
/**
 * Disable Hypermedia
 */
export declare enum GetHypermediaEnum {
    Yes = "yes",
    No = "no"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Content Type
     */
    contentType?: GetContentTypeEnum;
    /**
     * Disable Hypermedia
     */
    hypermedia?: GetHypermediaEnum;
}
export declare enum Get200ApplicationJSONStatusEnum {
    Ok = "OK"
}
/**
 * Return Status OK and/or resource list
 */
export declare class Get200ApplicationJSON extends SpeakeasyBase {
    status?: Get200ApplicationJSONStatusEnum;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Return Status OK and/or resource list
     */
    get200ApplicationJSONObject?: Get200ApplicationJSON;
}
