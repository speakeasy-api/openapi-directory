import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CloneOrganizationRequestBody extends SpeakeasyBase {
    /**
     * The name of the new organization
     */
    name: string;
}
export declare class CloneOrganizationRequest extends SpeakeasyBase {
    requestBody: CloneOrganizationRequestBody;
    organizationId: string;
}
/**
 * API related settings
 */
export declare class CloneOrganization201ApplicationJSONApi extends SpeakeasyBase {
    /**
     * Enable API access
     */
    enabled?: boolean;
}
/**
 * Region info
 */
export declare class CloneOrganization201ApplicationJSONCloudRegion extends SpeakeasyBase {
    /**
     * Name of region
     */
    name?: string;
}
/**
 * Data for this organization
 */
export declare class CloneOrganization201ApplicationJSONCloud extends SpeakeasyBase {
    /**
     * Region info
     */
    region?: CloneOrganization201ApplicationJSONCloudRegion;
}
/**
 * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
 */
export declare enum CloneOrganization201ApplicationJSONLicensingModelEnum {
    CoTerm = "co-term",
    PerDevice = "per-device",
    Subscription = "subscription"
}
/**
 * Licensing related settings
 */
export declare class CloneOrganization201ApplicationJSONLicensing extends SpeakeasyBase {
    /**
     * Organization licensing model. Can be 'co-term', 'per-device', or 'subscription'.
     */
    model?: CloneOrganization201ApplicationJSONLicensingModelEnum;
}
export declare class CloneOrganization201ApplicationJSONManagementDetails extends SpeakeasyBase {
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
export declare class CloneOrganization201ApplicationJSONManagement extends SpeakeasyBase {
    /**
     * Details related to organization management, possibly empty
     */
    details?: CloneOrganization201ApplicationJSONManagementDetails[];
}
/**
 * Successful operation
 */
export declare class CloneOrganization201ApplicationJSON extends SpeakeasyBase {
    /**
     * API related settings
     */
    api?: CloneOrganization201ApplicationJSONApi;
    /**
     * Data for this organization
     */
    cloud?: CloneOrganization201ApplicationJSONCloud;
    /**
     * Organization ID
     */
    id?: string;
    /**
     * Licensing related settings
     */
    licensing?: CloneOrganization201ApplicationJSONLicensing;
    /**
     * Information about the organization's management system
     */
    management?: CloneOrganization201ApplicationJSONManagement;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Organization URL
     */
    url?: string;
}
export declare class CloneOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    cloneOrganization201ApplicationJSONObject?: CloneOrganization201ApplicationJSON;
}
