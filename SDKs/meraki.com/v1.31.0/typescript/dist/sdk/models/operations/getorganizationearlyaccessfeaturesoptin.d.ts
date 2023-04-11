import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationEarlyAccessFeaturesOptInRequest extends SpeakeasyBase {
    optInId: string;
    organizationId: string;
}
export declare class GetOrganizationEarlyAccessFeaturesOptInResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject?: Record<string, any>;
}
