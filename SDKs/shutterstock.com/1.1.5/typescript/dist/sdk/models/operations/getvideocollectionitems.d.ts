import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetVideoCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetVideoCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    shareCode?: string;
    sort?: GetVideoCollectionItemsSortEnum;
}
export declare class GetVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetVideoCollectionItemsPathParams;
    queryParams: GetVideoCollectionItemsQueryParams;
    security: GetVideoCollectionItemsSecurity;
}
export declare class GetVideoCollectionItemsResponse extends SpeakeasyBase {
    collectionItemDataList?: any;
    contentType: string;
    statusCode: number;
}
