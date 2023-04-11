import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletesystemSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class DeletesystemRequest extends SpeakeasyBase {
    /**
     * Inventory ID
     */
    inventoryId: string;
}
export declare class DeletesystemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
