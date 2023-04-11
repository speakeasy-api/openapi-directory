import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices extends SpeakeasyBase {
    /**
     * Import ID from the Import operation
     */
    deviceId: string;
    /**
     * Network Id
     */
    networkId: string;
    /**
     * Device UDI certificate
     */
    udi: string;
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody extends SpeakeasyBase {
    /**
     * A set of device imports to commit
     */
    devices: CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices[];
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique id associated with the import of the device
     */
    importId?: string;
    /**
     * Response method
     */
    message?: string;
    /**
     * Cloud monitor import status
     */
    status?: string;
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects?: CreateOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSON[];
}
