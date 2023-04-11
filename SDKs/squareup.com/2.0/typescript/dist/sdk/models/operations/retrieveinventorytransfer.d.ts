import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveInventoryTransferSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveInventoryTransferRequest extends SpeakeasyBase {
    /**
     * ID of the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) to retrieve.
     */
    transferId: string;
}
export declare class RetrieveInventoryTransferResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveInventoryTransferResponse?: shared.RetrieveInventoryTransferResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
