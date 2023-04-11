import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1ListsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Enumerable oneOf followed list none. Defaults to list.
 */
export declare enum PostApiV1ListsRequestBodyRepliesPolicyEnum {
    Followed = "followed",
    List = "list",
    None = "none"
}
export declare class PostApiV1ListsRequestBody extends SpeakeasyBase {
    /**
     * Enumerable oneOf followed list none. Defaults to list.
     */
    repliesPolicy?: PostApiV1ListsRequestBodyRepliesPolicyEnum;
    /**
     * The title of the list to be created.
     */
    title: string;
}
export declare class PostApiV1ListsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * A list was created successfully
     */
    list?: shared.List;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
