import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturedVideoCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFeaturedVideoCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetFeaturedVideoCollectionItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedVideoCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetFeaturedVideoCollectionItemsPathParams;
    queryParams: GetFeaturedVideoCollectionItemsQueryParams;
    security: GetFeaturedVideoCollectionItemsSecurity;
}
export declare class GetFeaturedVideoCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoCollectionItemDataList?: any;
}
