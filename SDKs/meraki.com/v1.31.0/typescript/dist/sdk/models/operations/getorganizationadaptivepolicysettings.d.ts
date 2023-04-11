import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicySettings200ApplicationJSONObject?: Record<string, any>;
}
