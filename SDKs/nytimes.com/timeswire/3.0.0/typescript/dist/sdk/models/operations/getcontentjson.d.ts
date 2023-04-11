import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContentJsonRequest extends SpeakeasyBase {
    /**
     * The complete URL of a specific news item, URL-encoded or backslash-escaped
     */
    url: string;
}
/**
 * An array of Articles
 */
export declare class GetContentJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetContentJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Articles
     */
    getContentJSON200ApplicationJSONObject?: GetContentJson200ApplicationJSON;
}
