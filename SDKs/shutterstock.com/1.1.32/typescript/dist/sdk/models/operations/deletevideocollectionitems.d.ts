import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteVideoCollectionItemsRequest extends SpeakeasyBase {
    /**
     * The ID of the Collection from which items will be deleted
     */
    id: string;
    /**
     * One or more video IDs to remove from the collection
     */
    itemId?: string[];
}
export declare class DeleteVideoCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
