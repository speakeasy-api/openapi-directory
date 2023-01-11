import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorCollectionsListPathParams extends SpeakeasyBase {
    contributorId: string;
}
export declare enum GetContributorCollectionsListSortEnum {
    Newest = "newest",
    LastUpdated = "last_updated",
    ItemCount = "item_count"
}
export declare class GetContributorCollectionsListQueryParams extends SpeakeasyBase {
    sort?: GetContributorCollectionsListSortEnum;
}
export declare class GetContributorCollectionsListSecurity extends SpeakeasyBase {
    customerAccessCode?: shared.SchemeCustomerAccessCode;
    basic?: shared.SchemeBasic;
}
export declare class GetContributorCollectionsListRequest extends SpeakeasyBase {
    pathParams: GetContributorCollectionsListPathParams;
    queryParams: GetContributorCollectionsListQueryParams;
    security: GetContributorCollectionsListSecurity;
}
export declare class GetContributorCollectionsListResponse extends SpeakeasyBase {
    collectionDataList?: any;
    contentType: string;
    statusCode: number;
}
