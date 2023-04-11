import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Sort order
 */
export declare enum GetVideoCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetVideoCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Collection ID
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
     * Code to retrieve the contents of a shared collection
     */
    shareCode?: string;
    /**
     * Sort order
     */
    sort?: GetVideoCollectionItemsSortEnum;
}
export declare class GetVideoCollectionItemsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionItemDataList?: shared.CollectionItemDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
