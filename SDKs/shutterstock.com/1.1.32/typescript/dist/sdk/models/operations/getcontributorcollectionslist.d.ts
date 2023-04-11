import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributorCollectionsListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort order
 */
export declare enum GetContributorCollectionsListSortEnum {
    Newest = "newest",
    LastUpdated = "last_updated",
    ItemCount = "item_count"
}
export declare class GetContributorCollectionsListRequest extends SpeakeasyBase {
    /**
     * Contributor ID
     */
    contributorId: string;
    /**
     * Sort order
     */
    sort?: GetContributorCollectionsListSortEnum;
}
export declare class GetContributorCollectionsListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionDataList?: shared.CollectionDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
