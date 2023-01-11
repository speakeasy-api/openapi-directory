import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlogPostsQueryParams extends SpeakeasyBase {
    fallback?: boolean;
    locale?: string;
    page?: number;
    perPage?: number;
}
export declare class GetBlogPostsRequest extends SpeakeasyBase {
    queryParams: GetBlogPostsQueryParams;
}
export declare class GetBlogPostsResponse extends SpeakeasyBase {
    blogArticleList?: shared.BlogArticleList;
    contentType: string;
    statusCode: number;
}
