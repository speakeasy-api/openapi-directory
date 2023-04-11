import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationLicenseRequest extends SpeakeasyBase {
    licenseId: string;
    organizationId: string;
}
export declare class GetOrganizationLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicense200ApplicationJSONObject?: Record<string, any>;
}
