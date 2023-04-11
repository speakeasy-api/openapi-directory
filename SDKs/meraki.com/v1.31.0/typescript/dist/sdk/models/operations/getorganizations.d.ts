import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * API related settings
 */
export declare class GetOrganizations200ApplicationJSONApi extends SpeakeasyBase {
    /**
     * Enable API access
     */
    enabled?: boolean;
}
/**
 * Region info
 */
export declare class GetOrganizations200ApplicationJSONCloudRegion extends SpeakeasyBase {
    /**
     * Name of region
     */
    name?: string;
}
/**
 * Data for this organization
 */
export declare class GetOrganizations200ApplicationJSONCloud extends SpeakeasyBase {
    /**
     * Region info
     */
    region?: GetOrganizations200ApplicationJSONCloudRegion;
}
/**
 * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
 */
export declare enum GetOrganizations200ApplicationJSONLicensingModelEnum {
    CoTerm = "co-term",
    PerDevice = "per-device",
    Subscription = "subscription"
}
/**
 * Licensing related settings
 */
export declare class GetOrganizations200ApplicationJSONLicensing extends SpeakeasyBase {
    /**
     * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
     */
    model?: GetOrganizations200ApplicationJSONLicensingModelEnum;
}
export declare class GetOrganizations200ApplicationJSONManagementDetails extends SpeakeasyBase {
    /**
     * Name of management data
     */
    name?: string;
    /**
     * Value of management data
     */
    value?: string;
}
/**
 * Information about the organization's management system
 */
export declare class GetOrganizations200ApplicationJSONManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: GetOrganizations200ApplicationJSONManagementDetails[];
}
export declare class GetOrganizations200ApplicationJSON extends SpeakeasyBase {
    /**
     * API related settings
     */
    api?: GetOrganizations200ApplicationJSONApi;
    /**
     * Data for this organization
     */
    cloud?: GetOrganizations200ApplicationJSONCloud;
    /**
     * Organization ID
     */
    id?: string;
    /**
     * Licensing related settings
     */
    licensing?: GetOrganizations200ApplicationJSONLicensing;
    /**
     * Information about the organization's management system
     */
    management?: GetOrganizations200ApplicationJSONManagement;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Organization URL
     */
    url?: string;
}
export declare class GetOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizations200ApplicationJSONObjects?: GetOrganizations200ApplicationJSON[];
}
