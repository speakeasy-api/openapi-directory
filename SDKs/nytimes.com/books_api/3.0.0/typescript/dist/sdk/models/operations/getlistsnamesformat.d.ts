import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETListsNamesFormatSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GETListsNamesFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GETListsNamesFormatRequest extends SpeakeasyBase {
    apiKey?: string;
    format: GETListsNamesFormatFormatEnum;
}
export declare class GETListsNamesFormat200ApplicationJSONResults extends SpeakeasyBase {
    displayName?: string;
    listName?: string;
    listNameEncoded?: string;
    newestPublishedDate?: string;
    oldestPublishedDate?: string;
    updated?: string;
}
export declare class GETListsNamesFormat200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GETListsNamesFormat200ApplicationJSONResults[];
    status?: string;
}
export declare class GETListsNamesFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsNamesFormat200ApplicationJSONObject?: GETListsNamesFormat200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
