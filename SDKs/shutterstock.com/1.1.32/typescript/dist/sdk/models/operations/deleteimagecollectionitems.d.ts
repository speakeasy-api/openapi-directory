import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImageCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteImageCollectionItemsRequest extends SpeakeasyBase {
    /**
     * Collection ID
     */
    id: string;
    /**
     * One or more image IDs to remove from the collection
     */
    itemId?: string[];
}
export declare class DeleteImageCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
