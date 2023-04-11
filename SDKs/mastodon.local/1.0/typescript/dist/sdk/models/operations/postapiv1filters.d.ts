import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1FiltersSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare enum PostApiV1FiltersRequestBodyContextEnum {
    Home = "home",
    Notifications = "notifications",
    Public = "public",
    Thread = "thread"
}
export declare class PostApiV1FiltersRequestBody extends SpeakeasyBase {
    /**
     * Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.
     */
    context: PostApiV1FiltersRequestBodyContextEnum[];
    /**
     * Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.
     */
    expiresIn?: number;
    /**
     * Should the server irreversibly drop matching entities from home and notifications?
     */
    irreversible?: boolean;
    /**
     * Text to be filtered.
     */
    phrase: string;
    /**
     * Consider word boundaries?
     */
    wholeWord?: boolean;
}
export declare class PostApiV1FiltersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * The newly-created filter will be returned.
     */
    filter?: shared.Filter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
