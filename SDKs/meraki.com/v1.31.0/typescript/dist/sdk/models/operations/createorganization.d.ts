import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationRequestBodyManagementDetails extends SpeakeasyBase {
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
export declare class CreateOrganizationRequestBodyManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: CreateOrganizationRequestBodyManagementDetails[];
}
export declare class CreateOrganizationRequestBody extends SpeakeasyBase {
    /**
     * Information about the organization's management system
     */
    management?: CreateOrganizationRequestBodyManagement;
    /**
     * The name of the organization
     */
    name: string;
}
/**
 * API related settings
 */
export declare class CreateOrganization201ApplicationJSONApi extends SpeakeasyBase {
    /**
     * Enable API access
     */
    enabled?: boolean;
}
/**
 * Region info
 */
export declare class CreateOrganization201ApplicationJSONCloudRegion extends SpeakeasyBase {
    /**
     * Name of region
     */
    name?: string;
}
/**
 * Data for this organization
 */
export declare class CreateOrganization201ApplicationJSONCloud extends SpeakeasyBase {
    /**
     * Region info
     */
    region?: CreateOrganization201ApplicationJSONCloudRegion;
}
/**
 * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
 */
export declare enum CreateOrganization201ApplicationJSONLicensingModelEnum {
    CoTerm = "co-term",
    PerDevice = "per-device",
    Subscription = "subscription"
}
/**
 * Licensing related settings
 */
export declare class CreateOrganization201ApplicationJSONLicensing extends SpeakeasyBase {
    /**
     * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
     */
    model?: CreateOrganization201ApplicationJSONLicensingModelEnum;
}
export declare class CreateOrganization201ApplicationJSONManagementDetails extends SpeakeasyBase {
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
export declare class CreateOrganization201ApplicationJSONManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: CreateOrganization201ApplicationJSONManagementDetails[];
}
/**
 * Successful operation
 */
export declare class CreateOrganization201ApplicationJSON extends SpeakeasyBase {
    /**
     * API related settings
     */
    api?: CreateOrganization201ApplicationJSONApi;
    /**
     * Data for this organization
     */
    cloud?: CreateOrganization201ApplicationJSONCloud;
    /**
     * Organization ID
     */
    id?: string;
    /**
     * Licensing related settings
     */
    licensing?: CreateOrganization201ApplicationJSONLicensing;
    /**
     * Information about the organization's management system
     */
    management?: CreateOrganization201ApplicationJSONManagement;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Organization URL
     */
    url?: string;
}
export declare class CreateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganization201ApplicationJSONObject?: CreateOrganization201ApplicationJSON;
}
