import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETListsDateListJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.
 */
export declare enum GETListsDateListJsonSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class GETListsDateListJsonRequest extends SpeakeasyBase {
    /**
     * YYYY-MM-DD
     *
     * @remarks
     *
     * The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
     */
    bestsellersDate?: string;
    date: string;
    /**
     * International Standard Book Number, 10 or 13 digits
     */
    isbn?: number;
    /**
     * Name of the Best Sellers List. You can get the full list from /lists/names.json
     */
    list: string;
    /**
     * The name of the Times best-seller list. To get valid values, use a list names request.
     *
     * @remarks
     *
     * Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)
     */
    listName?: string;
    /**
     * Sets the starting point of the result set
     */
    offset?: number;
    /**
     * YYYY-MM-DD
     *
     * @remarks
     *
     * The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
     */
    publishedDate?: Date;
    /**
     * The rank of the best seller on list-name as of bestsellers-date
     */
    rank?: string;
    /**
     * The rank of the best seller on list-name one week prior to bestsellers-date
     */
    rankLastWeek?: number;
    /**
     * The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.
     */
    sortOrder?: GETListsDateListJsonSortOrderEnum;
    /**
     * The number of weeks that the best seller has been on list-name, as of bestsellers-date
     */
    weeksOnList?: number;
}
export declare class GETListsDateListJson200ApplicationJSONResultsBooksIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GETListsDateListJson200ApplicationJSONResultsBooks extends SpeakeasyBase {
    ageGroup?: string;
    amazonProductUrl?: string;
    articleChapterLink?: string;
    asterisk?: number;
    author?: string;
    bookImage?: string;
    bookReviewLink?: string;
    contributor?: string;
    contributorNote?: string;
    dagger?: number;
    description?: string;
    firstChapterLink?: string;
    isbns?: GETListsDateListJson200ApplicationJSONResultsBooksIsbns[];
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    rank?: number;
    rankLastWeek?: number;
    sundayReviewLink?: string;
    title?: string;
    weeksOnList?: number;
}
export declare class GETListsDateListJson200ApplicationJSONResults extends SpeakeasyBase {
    bestsellersDate?: string;
    books?: GETListsDateListJson200ApplicationJSONResultsBooks[];
    corrections?: Record<string, any>[];
    displayName?: string;
    listName?: string;
    normalListEndsAt?: number;
    publishedDate?: string;
    updated?: string;
}
export declare class GETListsDateListJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    lastModified?: string;
    numResults?: number;
    results?: GETListsDateListJson200ApplicationJSONResults;
    status?: string;
}
export declare class GETListsDateListJsonResponse extends SpeakeasyBase {
    contentType: string;
    getListsDateListJSON200ApplicationJSONObject?: GETListsDateListJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
