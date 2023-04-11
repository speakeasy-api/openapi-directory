import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETListsFormatSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GETListsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
/**
 * Sets the sort order of the result set
 */
export declare enum GETListsFormatSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class GETListsFormatRequest extends SpeakeasyBase {
    /**
     * YYYY-MM-DD
     *
     * @remarks
     *
     * The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
     */
    bestsellersDate?: Date;
    /**
     * YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
     */
    date?: string;
    format: GETListsFormatFormatEnum;
    /**
     * International Standard Book Number, 10 or 13 digits
     */
    isbn?: string;
    /**
     * The name of the Times best-seller list. To get valid values, use a list names request.
     *
     * @remarks
     *
     * Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)
     */
    list?: string;
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
    publishedDate?: string;
    /**
     * The rank of the best seller on list-name as of bestsellers-date
     */
    rank?: number;
    /**
     * The rank of the best seller on list-name one week prior to bestsellers-date
     */
    rankLastWeek?: number;
    /**
     * Sets the sort order of the result set
     */
    sortOrder?: GETListsFormatSortOrderEnum;
    /**
     * The number of weeks that the best seller has been on list-name, as of bestsellers-date
     */
    weeksOnList?: number;
}
export declare class GETListsFormat200ApplicationJSONResultsBookDetails extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    description?: string;
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    title?: string;
}
export declare class GETListsFormat200ApplicationJSONResultsIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GETListsFormat200ApplicationJSONResultsReviews extends SpeakeasyBase {
    articleChapterLink?: string;
    bookReviewLink?: string;
    firstChapterLink?: string;
    sundayReviewLink?: string;
}
export declare class GETListsFormat200ApplicationJSONResults extends SpeakeasyBase {
    amazonProductUrl?: string;
    asterisk?: number;
    bestsellersDate?: string;
    bookDetails?: GETListsFormat200ApplicationJSONResultsBookDetails[];
    dagger?: number;
    displayName?: string;
    isbns?: GETListsFormat200ApplicationJSONResultsIsbns[];
    listName?: string;
    publishedDate?: string;
    rank?: number;
    rankLastWeek?: number;
    reviews?: GETListsFormat200ApplicationJSONResultsReviews[];
    weeksOnList?: number;
}
export declare class GETListsFormat200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    lastModified?: string;
    numResults?: number;
    results?: GETListsFormat200ApplicationJSONResults[];
    status?: string;
}
export declare class GETListsFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsFormat200ApplicationJSONObject?: GETListsFormat200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
