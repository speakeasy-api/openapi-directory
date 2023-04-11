import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInventoryDeviceRequest extends SpeakeasyBase {
    organizationId: string;
    serial: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationInventoryDevice200ApplicationJSON extends SpeakeasyBase {
    /**
     * Claimed time of the device
     */
    claimedAt?: Date;
    /**
     * License expiration date of the device
     */
    licenseExpirationDate?: Date;
    /**
     * MAC address of the device
     */
    mac?: string;
    /**
     * Model type of the device
     */
    model?: string;
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Network Id of the device
     */
    networkId?: string;
    /**
     * Order number of the device
     */
    orderNumber?: string;
    /**
     * Product type of the device
     */
    productType?: string;
    /**
     * Serial number of the device
     */
    serial?: string;
    /**
     * Device tags
     */
    tags?: string[];
}
export declare class GetOrganizationInventoryDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInventoryDevice200ApplicationJSONObject?: GetOrganizationInventoryDevice200ApplicationJSON;
}
