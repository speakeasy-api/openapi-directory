import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganization200ApplicationJSONObject?: Record<string, any>;
}
