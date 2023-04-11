import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSecurityIntrusionSettingsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSecurityIntrusionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSecurityIntrusionSettings200ApplicationJSONObject?: Record<string, any>;
}
