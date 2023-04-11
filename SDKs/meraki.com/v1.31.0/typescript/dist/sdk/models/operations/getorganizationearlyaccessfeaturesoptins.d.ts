import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationEarlyAccessFeaturesOptInsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationEarlyAccessFeaturesOptInsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects?: Record<string, any>[];
}
