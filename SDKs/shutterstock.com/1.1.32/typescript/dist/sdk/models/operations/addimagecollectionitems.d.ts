import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddImageCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class AddImageCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Array of image IDs to add to the collection
     */
    collectionItemRequest: shared.CollectionItemRequest;
    /**
     * Collection ID
     */
    id: string;
}
export declare class AddImageCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
