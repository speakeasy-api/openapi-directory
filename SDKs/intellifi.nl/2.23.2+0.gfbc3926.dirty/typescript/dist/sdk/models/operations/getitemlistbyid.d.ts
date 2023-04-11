import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemListByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetItemListByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the item list
     */
    itemList?: shared.ItemList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
