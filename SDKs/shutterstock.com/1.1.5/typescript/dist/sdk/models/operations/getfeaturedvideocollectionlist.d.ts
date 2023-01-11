import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFeaturedVideoCollectionListEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedVideoCollectionListQueryParams extends SpeakeasyBase {
    embed?: GetFeaturedVideoCollectionListEmbedEnum;
}
export declare class GetFeaturedVideoCollectionListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedVideoCollectionListRequest extends SpeakeasyBase {
    queryParams: GetFeaturedVideoCollectionListQueryParams;
    security: GetFeaturedVideoCollectionListSecurity;
}
export declare class GetFeaturedVideoCollectionListResponse extends SpeakeasyBase {
    contentType: string;
    featuredCollectionDataList?: any;
    statusCode: number;
}
