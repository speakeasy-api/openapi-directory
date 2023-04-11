import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationAdaptivePolicySettingsRequestBody extends SpeakeasyBase {
    /**
     * List of network IDs with adaptive policy enabled
     */
    enabledNetworks?: string[];
}
export declare class UpdateOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationAdaptivePolicySettingsRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationAdaptivePolicySettings200ApplicationJSONObject?: Record<string, any>;
}
