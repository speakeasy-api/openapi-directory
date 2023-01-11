import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorCollectionItemsPathParams extends SpeakeasyBase {
    contributorId: string;
    id: string;
}
export declare enum GetContributorCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetContributorCollectionItemsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    sort?: GetContributorCollectionItemsSortEnum;
}
export declare class GetContributorCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode?: shared.SchemeCustomerAccessCode;
    basic?: shared.SchemeBasic;
}
export declare class GetContributorCollectionItemsRequest extends SpeakeasyBase {
    pathParams: GetContributorCollectionItemsPathParams;
    queryParams: GetContributorCollectionItemsQueryParams;
    security: GetContributorCollectionItemsSecurity;
}
export declare class GetContributorCollectionItemsResponse extends SpeakeasyBase {
    collectionItemDataList?: any;
    contentType: string;
    statusCode: number;
}
