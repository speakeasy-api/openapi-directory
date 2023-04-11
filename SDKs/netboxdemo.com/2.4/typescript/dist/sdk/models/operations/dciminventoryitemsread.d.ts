import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInventoryItemsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this inventory item.
     */
    id: number;
}
export declare class DcimInventoryItemsReadResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
