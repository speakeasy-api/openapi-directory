import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBlogPostsRequest extends SpeakeasyBase {
    /**
     * When `true`, and no article is found in the locale, it falls back to `locale=en`.
     */
    fallback?: boolean;
    /**
     * Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.
     */
    locale?: string;
    page?: number;
    perPage?: number;
}
export declare class GetBlogPostsResponse extends SpeakeasyBase {
    /**
     * List of blog articles
     */
    blogArticleList?: shared.BlogArticleList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
