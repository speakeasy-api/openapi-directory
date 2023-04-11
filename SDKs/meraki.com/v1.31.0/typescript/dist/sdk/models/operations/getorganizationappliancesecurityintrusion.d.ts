import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject?: Record<string, any>;
}
