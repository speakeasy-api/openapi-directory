import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationRequest extends SpeakeasyBase {
    organizationId: string;
}
/**
 * API related settings
 */
export declare class GetOrganization200ApplicationJSONApi extends SpeakeasyBase {
    /**
     * Enable API access
     */
    enabled?: boolean;
}
/**
 * Region info
 */
export declare class GetOrganization200ApplicationJSONCloudRegion extends SpeakeasyBase {
    /**
     * Name of region
     */
    name?: string;
}
/**
 * Data for this organization
 */
export declare class GetOrganization200ApplicationJSONCloud extends SpeakeasyBase {
    /**
     * Region info
     */
    region?: GetOrganization200ApplicationJSONCloudRegion;
}
/**
 * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
 */
export declare enum GetOrganization200ApplicationJSONLicensingModelEnum {
    CoTerm = "co-term",
    PerDevice = "per-device",
    Subscription = "subscription"
}
/**
 * Licensing related settings
 */
export declare class GetOrganization200ApplicationJSONLicensing extends SpeakeasyBase {
    /**
     * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
     */
    model?: GetOrganization200ApplicationJSONLicensingModelEnum;
}
export declare class GetOrganization200ApplicationJSONManagementDetails extends SpeakeasyBase {
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
export declare class GetOrganization200ApplicationJSONManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: GetOrganization200ApplicationJSONManagementDetails[];
}
/**
 * Successful operation
 */
export declare class GetOrganization200ApplicationJSON extends SpeakeasyBase {
    /**
     * API related settings
     */
    api?: GetOrganization200ApplicationJSONApi;
    /**
     * Data for this organization
     */
    cloud?: GetOrganization200ApplicationJSONCloud;
    /**
     * Organization ID
     */
    id?: string;
    /**
     * Licensing related settings
     */
    licensing?: GetOrganization200ApplicationJSONLicensing;
    /**
     * Information about the organization's management system
     */
    management?: GetOrganization200ApplicationJSONManagement;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Organization URL
     */
    url?: string;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganization200ApplicationJSONObject?: GetOrganization200ApplicationJSON;
}
