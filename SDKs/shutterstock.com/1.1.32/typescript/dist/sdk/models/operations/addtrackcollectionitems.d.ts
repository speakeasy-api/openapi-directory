import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class AddTrackCollectionItemsRequest extends SpeakeasyBase {
    /**
     * List of items to add to collection
     */
    collectionItemRequest: shared.CollectionItemRequest;
    /**
     * Collection ID
     */
    id: string;
}
export declare class AddTrackCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
