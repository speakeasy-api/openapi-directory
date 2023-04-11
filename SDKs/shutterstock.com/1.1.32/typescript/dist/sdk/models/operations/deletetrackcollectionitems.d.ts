import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteTrackCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Collection ID
     */
    id: string;
    /**
     * One or more item IDs to remove from the collection
     */
    itemId?: string[];
}
export declare class DeleteTrackCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
