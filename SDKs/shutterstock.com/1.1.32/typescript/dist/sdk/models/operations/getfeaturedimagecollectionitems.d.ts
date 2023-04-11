import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturedImageCollectionItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetFeaturedImageCollectionItemsRequest extends SpeakeasyBase {
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
}
export declare class GetFeaturedImageCollectionItemsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionItemDataList?: shared.CollectionItemDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
