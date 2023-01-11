import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetImageCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetImageCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    shareCode?: string;
    sort?: GetImageCollectionItemsSortEnum;
}
export declare class GetImageCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetImageCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetImageCollectionItemsPathParams;
    queryParams: GetImageCollectionItemsQueryParams;
    security: GetImageCollectionItemsSecurity;
}
export declare class GetImageCollectionItemsResponse extends SpeakeasyBase {
    collectionItemDataList?: any;
    contentType: string;
    statusCode: number;
}
