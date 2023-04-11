import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInventoryItemsPartialUpdateRequest extends SpeakeasyBase {
    writableInventoryItemInput: shared.WritableInventoryItemInput;
    /**
     * A unique integer value identifying this inventory item.
     */
    id: number;
}
export declare class DcimInventoryItemsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
