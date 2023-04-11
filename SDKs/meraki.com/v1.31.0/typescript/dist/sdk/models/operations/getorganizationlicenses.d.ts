import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'
 */
export declare enum GetOrganizationLicensesStateEnum {
    Active = "active",
    Expired = "expired",
    Expiring = "expiring",
    RecentlyQueued = "recentlyQueued",
    Unused = "unused",
    UnusedActive = "unusedActive"
}
export declare class GetOrganizationLicensesRequest extends SpeakeasyBase {
    /**
     * Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device.
     */
    deviceSerial?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Filter the licenses to those assigned in a particular network
     */
    networkId?: string;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'
     */
    state?: GetOrganizationLicensesStateEnum;
}
export declare class GetOrganizationLicenses200ApplicationJSONPermanentlyQueuedLicenses extends SpeakeasyBase {
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
export declare enum GetOrganizationLicenses200ApplicationJSONStateEnum {
    Active = "active",
    Expired = "expired",
    Expiring = "expiring",
    RecentlyQueued = "recentlyQueued",
    Unused = "unused",
    UnusedActive = "unusedActive"
}
export declare class GetOrganizationLicenses200ApplicationJSON extends SpeakeasyBase {
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
    permanentlyQueuedLicenses?: GetOrganizationLicenses200ApplicationJSONPermanentlyQueuedLicenses[];
    /**
     * The number of seats of the license. Only applicable to SM licenses.
     */
    seatCount?: number;
    /**
     * The state of the license. All queued licenses have a status of `recentlyQueued`.
     */
    state?: GetOrganizationLicenses200ApplicationJSONStateEnum;
    /**
     * The duration of the license plus all permanently queued licenses associated with it
     */
    totalDurationInDays?: number;
}
export declare class GetOrganizationLicensesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicenses200ApplicationJSONObjects?: GetOrganizationLicenses200ApplicationJSON[];
}
