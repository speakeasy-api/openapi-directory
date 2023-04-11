import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationLicenseRequest extends SpeakeasyBase {
    licenseId: string;
    organizationId: string;
}
export declare class GetOrganizationLicense200ApplicationJSONPermanentlyQueuedLicenses extends SpeakeasyBase {
    /**
     * The duration of the individual license
     */
    durationInDays?: number;
    /**
     * Permanently queued license ID
     */
    id?: string;
    /**
     * License key
     */
    licenseKey?: string;
    /**
     * License type
     */
    licenseType?: string;
    /**
     * Order number
     */
    orderNumber?: string;
}
/**
 * The state of the license. All queued licenses have a status of `recentlyQueued`.
 */
export declare enum GetOrganizationLicense200ApplicationJSONStateEnum {
    Active = "active",
    Expired = "expired",
    Expiring = "expiring",
    RecentlyQueued = "recentlyQueued",
    Unused = "unused",
    UnusedActive = "unusedActive"
}
/**
 * Successful operation
 */
export declare class GetOrganizationLicense200ApplicationJSON extends SpeakeasyBase {
    /**
     * The date the license started burning
     */
    activationDate?: string;
    /**
     * The date the license was claimed into the organization
     */
    claimDate?: string;
    /**
     * Serial number of the device the license is assigned to
     */
    deviceSerial?: string;
    /**
     * The duration of the individual license
     */
    durationInDays?: number;
    /**
     * The date the license will expire
     */
    expirationDate?: string;
    /**
     * The id of the head license this license is queued behind. If there is no head license, it returns nil.
     */
    headLicenseId?: string;
    /**
     * License ID
     */
    id?: string;
    /**
     * License key
     */
    licenseKey?: string;
    /**
     * License type
     */
    licenseType?: string;
    /**
     * ID of the network the license is assigned to
     */
    networkId?: string;
    /**
     * Order number
     */
    orderNumber?: string;
    /**
     * DEPRECATED List of permanently queued licenses attached to the license. Instead, use /organizations/{organizationId}/licenses?deviceSerial= to retrieved queued licenses for a given device.
     */
    permanentlyQueuedLicenses?: GetOrganizationLicense200ApplicationJSONPermanentlyQueuedLicenses[];
    /**
     * The number of seats of the license. Only applicable to SM licenses.
     */
    seatCount?: number;
    /**
     * The state of the license. All queued licenses have a status of `recentlyQueued`.
     */
    state?: GetOrganizationLicense200ApplicationJSONStateEnum;
    /**
     * The duration of the license plus all permanently queued licenses associated with it
     */
    totalDurationInDays?: number;
}
export declare class GetOrganizationLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicense200ApplicationJSONObject?: GetOrganizationLicense200ApplicationJSON;
}
