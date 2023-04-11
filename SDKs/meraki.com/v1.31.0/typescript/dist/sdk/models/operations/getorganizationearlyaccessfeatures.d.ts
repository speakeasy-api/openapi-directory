import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationEarlyAccessFeaturesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationEarlyAccessFeaturesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationEarlyAccessFeatures200ApplicationJSONObjects?: Record<string, any>[];
}
