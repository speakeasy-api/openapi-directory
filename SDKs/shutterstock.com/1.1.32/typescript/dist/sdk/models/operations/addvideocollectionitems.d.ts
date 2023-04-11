import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class AddVideoCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Array of video IDs to add to the collection
     */
    collectionItemRequest: shared.CollectionItemRequest;
    /**
     * The ID of the collection to which items should be added
     */
    id: string;
}
export declare class AddVideoCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
