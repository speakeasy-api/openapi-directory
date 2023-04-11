import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationEarlyAccessFeaturesOptInRequestBody extends SpeakeasyBase {
    /**
     * A list of network IDs to apply the opt-in to
     */
    limitScopeToNetworks?: string[];
}
export declare class UpdateOrganizationEarlyAccessFeaturesOptInRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationEarlyAccessFeaturesOptInRequestBody;
    optInId: string;
    organizationId: string;
}
export declare class UpdateOrganizationEarlyAccessFeaturesOptInResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject?: Record<string, any>;
}
