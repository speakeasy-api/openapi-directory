import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCollectionsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Sort by
 */
export declare enum GetCollectionsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetCollectionsRequest extends SpeakeasyBase {
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Set to true to omit collections that you own and return only collections  that are shared with you
     */
    shared?: boolean;
    /**
     * Sort by
     */
    sort?: GetCollectionsSortEnum;
}
export declare class GetCollectionsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollectionDataList?: shared.CatalogCollectionDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
