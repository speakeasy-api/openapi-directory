import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationEarlyAccessFeaturesOptInRequestBody extends SpeakeasyBase {
    /**
     * A list of network IDs to apply the opt-in to
     */
    limitScopeToNetworks?: string[];
    /**
     * Short name of the early access feature
     */
    shortName: string;
}
export declare class CreateOrganizationEarlyAccessFeaturesOptInRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationEarlyAccessFeaturesOptInRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationEarlyAccessFeaturesOptInResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject?: Record<string, any>;
}
