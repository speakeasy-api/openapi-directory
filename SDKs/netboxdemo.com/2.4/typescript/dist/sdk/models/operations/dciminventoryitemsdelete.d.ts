import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimInventoryItemsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this inventory item.
     */
    id: number;
}
export declare class DcimInventoryItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
