import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetItemListIdsByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetItemListIdsByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array object containing the item ids for this list
     */
    listOfItemIds?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
