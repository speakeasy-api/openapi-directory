import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationCameraCustomAnalyticsArtifactsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationCameraCustomAnalyticsArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects?: Record<string, any>[];
}
