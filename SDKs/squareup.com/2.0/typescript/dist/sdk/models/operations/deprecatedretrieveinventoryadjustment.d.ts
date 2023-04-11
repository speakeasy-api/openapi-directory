import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeprecatedRetrieveInventoryAdjustmentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeprecatedRetrieveInventoryAdjustmentRequest extends SpeakeasyBase {
    /**
     * ID of the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) to retrieve.
     */
    adjustmentId: string;
}
export declare class DeprecatedRetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveInventoryAdjustmentResponse?: shared.RetrieveInventoryAdjustmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
