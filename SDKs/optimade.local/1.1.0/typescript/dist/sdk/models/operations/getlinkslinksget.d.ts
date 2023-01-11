import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinksLinksGetQueryParams extends SpeakeasyBase {
    apiHint?: string;
    emailAddress?: string;
    filter?: string;
    include?: string;
    pageAbove?: number;
    pageBelow?: number;
    pageCursor?: number;
    pageLimit?: number;
    pageNumber?: number;
    pageOffset?: number;
    responseFields?: string;
    responseFormat?: string;
    sort?: string;
}
export declare class GetLinksLinksGetRequest extends SpeakeasyBase {
    queryParams: GetLinksLinksGetQueryParams;
}
export declare class GetLinksLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    linksResponse?: shared.LinksResponse;
    statusCode: number;
}
