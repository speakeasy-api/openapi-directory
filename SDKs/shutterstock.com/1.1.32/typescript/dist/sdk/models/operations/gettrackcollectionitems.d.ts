import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Sort order
 */
export declare enum GetTrackCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetTrackCollectionItemsRequest extends SpeakeasyBase {
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
    sort?: GetTrackCollectionItemsSortEnum;
}
export declare class GetTrackCollectionItemsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionItemDataList?: shared.CollectionItemDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
