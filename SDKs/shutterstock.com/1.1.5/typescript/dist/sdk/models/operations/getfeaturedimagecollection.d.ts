import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturedImageCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetFeaturedImageCollectionAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}
export declare enum GetFeaturedImageCollectionEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedImageCollectionQueryParams extends SpeakeasyBase {
    assetHint?: GetFeaturedImageCollectionAssetHintEnum;
    embed?: GetFeaturedImageCollectionEmbedEnum;
}
export declare class GetFeaturedImageCollectionSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedImageCollectionRequest extends SpeakeasyBase {
    pathParams: GetFeaturedImageCollectionPathParams;
    queryParams: GetFeaturedImageCollectionQueryParams;
    security: GetFeaturedImageCollectionSecurity;
}
export declare class GetFeaturedImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    featuredCollection?: shared.FeaturedCollection;
    statusCode: number;
}
