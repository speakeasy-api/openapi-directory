import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInventoryRequest extends SpeakeasyBase {
    /**
     * When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false.
     */
    includeLicenseInfo?: boolean;
    organizationId: string;
}
export declare class GetOrganizationInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInventory200ApplicationJSONObjects?: Record<string, any>[];
}
