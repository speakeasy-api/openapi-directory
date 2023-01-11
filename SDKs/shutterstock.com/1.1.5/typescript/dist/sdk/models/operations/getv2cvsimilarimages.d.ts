import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetV2CvSimilarImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
export declare enum GetV2CvSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetV2CvSimilarImagesQueryParams extends SpeakeasyBase {
    assetId: string;
    language?: shared.LanguageEnum;
    license?: GetV2CvSimilarImagesLicenseEnum[];
    page?: number;
    perPage?: number;
    safe?: boolean;
    view?: GetV2CvSimilarImagesViewEnum;
}
export declare class GetV2CvSimilarImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetV2CvSimilarImagesRequest extends SpeakeasyBase {
    queryParams: GetV2CvSimilarImagesQueryParams;
    security: GetV2CvSimilarImagesSecurity;
}
export declare class GetV2CvSimilarImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchResults?: shared.ImageSearchResults;
    statusCode: number;
}
