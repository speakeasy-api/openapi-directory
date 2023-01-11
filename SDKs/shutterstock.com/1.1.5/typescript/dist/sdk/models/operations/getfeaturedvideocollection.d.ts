import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturedVideoCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetFeaturedVideoCollectionEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedVideoCollectionQueryParams extends SpeakeasyBase {
    embed?: GetFeaturedVideoCollectionEmbedEnum;
}
export declare class GetFeaturedVideoCollectionSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedVideoCollectionRequest extends SpeakeasyBase {
    pathParams: GetFeaturedVideoCollectionPathParams;
    queryParams: GetFeaturedVideoCollectionQueryParams;
    security: GetFeaturedVideoCollectionSecurity;
}
export declare class GetFeaturedVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    featuredCollection?: shared.FeaturedCollection;
    statusCode: number;
}
