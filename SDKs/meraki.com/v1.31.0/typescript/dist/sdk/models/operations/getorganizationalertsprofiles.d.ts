import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAlertsProfilesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAlertsProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAlertsProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
