import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributorCollectionItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort order
 */
export declare enum GetContributorCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetContributorCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Contributor ID
     */
    contributorId: string;
    /**
     * Collection ID that belongs to the contributor
     */
    id: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Sort order
     */
    sort?: GetContributorCollectionItemsSortEnum;
}
export declare class GetContributorCollectionItemsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionItemDataList?: shared.CollectionItemDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
