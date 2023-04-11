import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowServiceInventoryRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * ServiceInventory info
     */
    serviceInventory?: shared.ServiceInventory;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
