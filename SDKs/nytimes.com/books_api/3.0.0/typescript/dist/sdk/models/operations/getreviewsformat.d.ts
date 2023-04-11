import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETReviewsFormatSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GETReviewsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GETReviewsFormatRequest extends SpeakeasyBase {
    apiKey?: string;
    /**
     * You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
     */
    author?: string;
    format: GETReviewsFormatFormatEnum;
    /**
     * Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
     */
    isbn?: number;
    /**
     * You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
     */
    title?: string;
}
export declare class GETReviewsFormat200ApplicationJSONResults extends SpeakeasyBase {
    bookAuthor?: string;
    bookTitle?: string;
    byline?: string;
    isbn13?: string[];
    publicationDt?: string;
    summary?: string;
    url?: string;
}
export declare class GETReviewsFormat200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GETReviewsFormat200ApplicationJSONResults[];
    status?: string;
}
export declare class GETReviewsFormatResponse extends SpeakeasyBase {
    contentType: string;
    getReviewsFormat200ApplicationJSONObject?: GETReviewsFormat200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
