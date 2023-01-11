import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarImagesPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSimilarImagesQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
    page?: number;
    perPage?: number;
    view?: GetSimilarImagesViewEnum;
}
export declare class GetSimilarImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetSimilarImagesRequest extends SpeakeasyBase {
    pathParams: GetSimilarImagesPathParams;
    queryParams: GetSimilarImagesQueryParams;
    security: GetSimilarImagesSecurity;
}
export declare class GetSimilarImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchResults?: shared.ImageSearchResults;
    statusCode: number;
}
