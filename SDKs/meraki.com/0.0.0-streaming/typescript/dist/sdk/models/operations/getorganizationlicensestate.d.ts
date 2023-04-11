import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationLicenseStateRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationLicenseStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicenseState200ApplicationJSONObject?: Record<string, any>;
}
