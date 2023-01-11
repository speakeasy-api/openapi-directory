import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFeaturedImageCollectionListAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}
export declare enum GetFeaturedImageCollectionListEmbedEnum {
    ShareUrl = "share_url"
}
export declare enum GetFeaturedImageCollectionListTypeEnum {
    Photo = "photo",
    Editorial = "editorial",
    Vector = "vector"
}
export declare class GetFeaturedImageCollectionListQueryParams extends SpeakeasyBase {
    assetHint?: GetFeaturedImageCollectionListAssetHintEnum;
    embed?: GetFeaturedImageCollectionListEmbedEnum;
    type?: GetFeaturedImageCollectionListTypeEnum[];
}
export declare class GetFeaturedImageCollectionListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedImageCollectionListRequest extends SpeakeasyBase {
    queryParams: GetFeaturedImageCollectionListQueryParams;
    security: GetFeaturedImageCollectionListSecurity;
}
export declare class GetFeaturedImageCollectionListResponse extends SpeakeasyBase {
    contentType: string;
    featuredCollectionDataList?: any;
    statusCode: number;
}
