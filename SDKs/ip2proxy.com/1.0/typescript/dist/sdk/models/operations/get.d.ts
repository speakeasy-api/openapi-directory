import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If not present, json format will be returned as the search result.
 */
export declare enum GetFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * If not present, json format will be returned as the search result.
     */
    format?: GetFormatEnum;
    /**
     * IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.
     */
    ip: string;
    /**
     * API key. Please sign up free trial license key at ip2location.com
     */
    key: string;
    /**
     * Package name from PX1 to PX11. If not present, the web service will assume the PX1 package query.
     */
    package?: string;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get response from IP2Proxy
     */
    get200TextHTMLString?: string;
}
