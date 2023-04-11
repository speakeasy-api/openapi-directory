import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleaseFromOrganizationInventoryRequestBody extends SpeakeasyBase {
    /**
     * Serials of the devices that should be released
     */
    serials?: string[];
}
export declare class ReleaseFromOrganizationInventoryRequest extends SpeakeasyBase {
    requestBody?: ReleaseFromOrganizationInventoryRequestBody;
    organizationId: string;
}
export declare class ReleaseFromOrganizationInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    releaseFromOrganizationInventory200ApplicationJSONObject?: Record<string, any>;
}
