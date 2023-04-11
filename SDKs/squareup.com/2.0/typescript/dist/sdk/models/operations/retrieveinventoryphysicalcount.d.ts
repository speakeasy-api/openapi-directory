import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveInventoryPhysicalCountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveInventoryPhysicalCountRequest extends SpeakeasyBase {
    /**
     * ID of the
     *
     * @remarks
     * [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount) to retrieve.
     */
    physicalCountId: string;
}
export declare class RetrieveInventoryPhysicalCountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveInventoryPhysicalCountResponse?: shared.RetrieveInventoryPhysicalCountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
