import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest extends SpeakeasyBase {
    /**
     * import ids from an imports
     */
    importIds: string[];
    organizationId: string;
}
/**
 * Represents the details of an imported device.
 */
export declare class GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONDevice extends SpeakeasyBase {
    /**
     * Whether or not the device was successfully created in dashboard.
     */
    created?: boolean;
    /**
     * Represents the current state of importing the device.
     */
    status?: string;
    /**
     * The url to the device details page within dashboard.
     */
    url?: string;
}
export declare class GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSON extends SpeakeasyBase {
    /**
     * Represents the details of an imported device.
     */
    device?: GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONDevice;
    /**
     * Database ID for the new entity entry.
     */
    importId?: string;
}
export declare class GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects?: GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSON[];
}
