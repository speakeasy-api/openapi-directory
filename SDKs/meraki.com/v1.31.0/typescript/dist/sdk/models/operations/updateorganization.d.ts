import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * API-specific settings
 */
export declare class UpdateOrganizationRequestBodyApi extends SpeakeasyBase {
    /**
     * If true, enable the access to the Cisco Meraki Dashboard API
     */
    enabled?: boolean;
}
export declare class UpdateOrganizationRequestBodyManagementDetails extends SpeakeasyBase {
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
export declare class UpdateOrganizationRequestBodyManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: UpdateOrganizationRequestBodyManagementDetails[];
}
export declare class UpdateOrganizationRequestBody extends SpeakeasyBase {
    /**
     * API-specific settings
     */
    api?: UpdateOrganizationRequestBodyApi;
    /**
     * Information about the organization's management system
     */
    management?: UpdateOrganizationRequestBodyManagement;
    /**
     * The name of the organization
     */
    name?: string;
}
export declare class UpdateOrganizationRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationRequestBody;
    organizationId: string;
}
/**
 * API related settings
 */
export declare class UpdateOrganization200ApplicationJSONApi extends SpeakeasyBase {
    /**
     * Enable API access
     */
    enabled?: boolean;
}
/**
 * Region info
 */
export declare class UpdateOrganization200ApplicationJSONCloudRegion extends SpeakeasyBase {
    /**
     * Name of region
     */
    name?: string;
}
/**
 * Data for this organization
 */
export declare class UpdateOrganization200ApplicationJSONCloud extends SpeakeasyBase {
    /**
     * Region info
     */
    region?: UpdateOrganization200ApplicationJSONCloudRegion;
}
/**
 * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
 */
export declare enum UpdateOrganization200ApplicationJSONLicensingModelEnum {
    CoTerm = "co-term",
    PerDevice = "per-device",
    Subscription = "subscription"
}
/**
 * Licensing related settings
 */
export declare class UpdateOrganization200ApplicationJSONLicensing extends SpeakeasyBase {
    /**
     * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
     */
    model?: UpdateOrganization200ApplicationJSONLicensingModelEnum;
}
export declare class UpdateOrganization200ApplicationJSONManagementDetails extends SpeakeasyBase {
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
export declare class UpdateOrganization200ApplicationJSONManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: UpdateOrganization200ApplicationJSONManagementDetails[];
}
/**
 * Successful operation
 */
export declare class UpdateOrganization200ApplicationJSON extends SpeakeasyBase {
    /**
     * API related settings
     */
    api?: UpdateOrganization200ApplicationJSONApi;
    /**
     * Data for this organization
     */
    cloud?: UpdateOrganization200ApplicationJSONCloud;
    /**
     * Organization ID
     */
    id?: string;
    /**
     * Licensing related settings
     */
    licensing?: UpdateOrganization200ApplicationJSONLicensing;
    /**
     * Information about the organization's management system
     */
    management?: UpdateOrganization200ApplicationJSONManagement;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Organization URL
     */
    url?: string;
}
export declare class UpdateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganization200ApplicationJSONObject?: UpdateOrganization200ApplicationJSON;
}
