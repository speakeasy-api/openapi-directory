import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetailSystemSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class DetailSystemRequest extends SpeakeasyBase {
    /**
     * Inventory ID
     */
    inventoryId: string;
}
export declare class DetailSystemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemDetailResponse?: shared.ControllersSystemDetailResponse;
}
