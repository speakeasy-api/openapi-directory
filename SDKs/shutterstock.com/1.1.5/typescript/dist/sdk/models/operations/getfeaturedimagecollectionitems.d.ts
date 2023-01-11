import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturedImageCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFeaturedImageCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetFeaturedImageCollectionItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetFeaturedImageCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetFeaturedImageCollectionItemsPathParams;
    queryParams: GetFeaturedImageCollectionItemsQueryParams;
    security: GetFeaturedImageCollectionItemsSecurity;
}
export declare class GetFeaturedImageCollectionItemsResponse extends SpeakeasyBase {
    collectionItemDataList?: any;
    contentType: string;
    statusCode: number;
}
