import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetV2CvSimilarVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
export declare enum GetV2CvSimilarVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetV2CvSimilarVideosQueryParams extends SpeakeasyBase {
    assetId: string;
    language?: shared.LanguageEnum;
    license?: GetV2CvSimilarVideosLicenseEnum[];
    page?: number;
    perPage?: number;
    safe?: boolean;
    view?: GetV2CvSimilarVideosViewEnum;
}
export declare class GetV2CvSimilarVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetV2CvSimilarVideosRequest extends SpeakeasyBase {
    queryParams: GetV2CvSimilarVideosQueryParams;
    security: GetV2CvSimilarVideosSecurity;
}
export declare class GetV2CvSimilarVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoSearchResults?: shared.VideoSearchResults;
}
