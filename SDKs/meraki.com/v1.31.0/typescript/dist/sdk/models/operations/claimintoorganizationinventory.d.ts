import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Co-term licensing only: either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. Does not apply to organizations using per-device licensing model.
 */
export declare enum ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class ClaimIntoOrganizationInventoryRequestBodyLicenses extends SpeakeasyBase {
    /**
     * The key of the license
     */
    key: string;
    /**
     * Co-term licensing only: either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. Does not apply to organizations using per-device licensing model.
     */
    mode?: ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum;
}
export declare class ClaimIntoOrganizationInventoryRequestBody extends SpeakeasyBase {
    /**
     * The licenses that should be claimed
     */
    licenses?: ClaimIntoOrganizationInventoryRequestBodyLicenses[];
    /**
     * The numbers of the orders that should be claimed
     */
    orders?: string[];
    /**
     * The serials of the devices that should be claimed
     */
    serials?: string[];
}
export declare class ClaimIntoOrganizationInventoryRequest extends SpeakeasyBase {
    requestBody?: ClaimIntoOrganizationInventoryRequestBody;
    organizationId: string;
}
export declare class ClaimIntoOrganizationInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    claimIntoOrganizationInventory200ApplicationJSONObject?: Record<string, any>;
}
