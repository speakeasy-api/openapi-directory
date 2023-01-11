import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarVideosPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetSimilarVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSimilarVideosQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
    page?: number;
    perPage?: number;
    view?: GetSimilarVideosViewEnum;
}
export declare class GetSimilarVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetSimilarVideosRequest extends SpeakeasyBase {
    pathParams: GetSimilarVideosPathParams;
    queryParams: GetSimilarVideosQueryParams;
    security: GetSimilarVideosSecurity;
}
export declare class GetSimilarVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoSearchResults?: shared.VideoSearchResults;
}
