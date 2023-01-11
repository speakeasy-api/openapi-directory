import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlogPostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fallback" })
  fallback?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetBlogPostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBlogPostsQueryParams;
}


export class GetBlogPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blogArticleList?: shared.BlogArticleList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
