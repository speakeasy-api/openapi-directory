import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetTrackCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetTrackCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    shareCode?: string;
    sort?: GetTrackCollectionItemsSortEnum;
}
export declare class GetTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetTrackCollectionItemsPathParams;
    queryParams: GetTrackCollectionItemsQueryParams;
    security: GetTrackCollectionItemsSecurity;
}
export declare class GetTrackCollectionItemsResponse extends SpeakeasyBase {
    collectionItemDataList?: any;
    contentType: string;
    statusCode: number;
}
