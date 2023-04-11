import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETListsBestSellersHistoryJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETListsBestSellersHistoryJsonRequest extends SpeakeasyBase {
    /**
     * The target age group for the best seller.
     */
    ageGroup?: string;
    /**
     * The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
     *
     * @remarks
     *
     * When searching the author field, you can specify any combination of first, middle and last names.
     *
     * When sort-by is set to author, the results will be sorted by author's first name.
     */
    author?: string;
    /**
     * The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
     *
     * @remarks
     *
     * When searching, you can specify any combination of first, middle and last names of any of the contributors.
     *
     * When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
     */
    contributor?: string;
    /**
     * International Standard Book Number, 10 or 13 digits
     *
     * @remarks
     *
     * A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
     */
    isbn?: string;
    /**
     * The publisher's list price of the best seller, including decimal point
     */
    price?: string;
    /**
     * The standardized name of the publisher
     */
    publisher?: string;
    /**
     * The title of the best seller
     *
     * @remarks
     *
     * When searching, you can specify a portion of a title or a full title.
     */
    title?: string;
}
export declare class GETListsBestSellersHistoryJson200ApplicationJSONResultsIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GETListsBestSellersHistoryJson200ApplicationJSONResultsRanksHistory extends SpeakeasyBase {
    asterisk?: number;
    bestsellersDate?: string;
    dagger?: number;
    displayName?: string;
    listName?: string;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publishedDate?: string;
    rank?: number;
    ranksLastWeek?: any;
    weeksOnList?: number;
}
export declare class GETListsBestSellersHistoryJson200ApplicationJSONResultsReviews extends SpeakeasyBase {
    articleChapterLink?: string;
    bookReviewLink?: string;
    firstChapterLink?: string;
    sundayReviewLink?: string;
}
export declare class GETListsBestSellersHistoryJson200ApplicationJSONResults extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    description?: string;
    isbns?: GETListsBestSellersHistoryJson200ApplicationJSONResultsIsbns[];
    price?: number;
    publisher?: string;
    ranksHistory?: GETListsBestSellersHistoryJson200ApplicationJSONResultsRanksHistory[];
    reviews?: GETListsBestSellersHistoryJson200ApplicationJSONResultsReviews[];
    title?: string;
}
export declare class GETListsBestSellersHistoryJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GETListsBestSellersHistoryJson200ApplicationJSONResults[];
    status?: string;
}
export declare class GETListsBestSellersHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    getListsBestSellersHistoryJSON200ApplicationJSONObject?: GETListsBestSellersHistoryJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
