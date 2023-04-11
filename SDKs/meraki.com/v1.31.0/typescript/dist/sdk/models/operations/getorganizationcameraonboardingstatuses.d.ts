import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
    /**
     * A list of network IDs. The returned cameras will be filtered to only include these networks.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * A list of serial numbers. The returned cameras will be filtered to only include these serials.
     */
    serials?: string[];
}
export declare class GetOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects?: Record<string, any>[];
}
