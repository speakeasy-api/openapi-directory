import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETListsOverviewFormatSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GETListsOverviewFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GETListsOverviewFormatRequest extends SpeakeasyBase {
    apiKey?: string;
    format: GETListsOverviewFormatFormatEnum;
    /**
     * The best-seller list publication date. YYYY-MM-DD
     *
     * @remarks
     *
     * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
     *
     * If you do not include a published_date, the current week's best-sellers lists will be returned.
     */
    publishedDate?: string;
}
export declare class GETListsOverviewFormat200ApplicationJSONResultsListsBooks extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    createdDate?: string;
    description?: string;
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    rank?: number;
    title?: string;
    updatedDate?: string;
}
export declare class GETListsOverviewFormat200ApplicationJSONResultsLists extends SpeakeasyBase {
    books?: GETListsOverviewFormat200ApplicationJSONResultsListsBooks[];
    displayName?: string;
    listId?: number;
    listImage?: string;
    listName?: string;
    updated?: string;
}
export declare class GETListsOverviewFormat200ApplicationJSONResults extends SpeakeasyBase {
    bestsellersDate?: string;
    lists?: GETListsOverviewFormat200ApplicationJSONResultsLists[];
    publishedDate?: string;
}
export declare class GETListsOverviewFormat200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GETListsOverviewFormat200ApplicationJSONResults;
    status?: string;
}
export declare class GETListsOverviewFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsOverviewFormat200ApplicationJSONObject?: GETListsOverviewFormat200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
