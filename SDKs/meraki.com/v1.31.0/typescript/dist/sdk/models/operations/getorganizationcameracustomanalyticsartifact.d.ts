import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationCameraCustomAnalyticsArtifactRequest extends SpeakeasyBase {
    artifactId: string;
    organizationId: string;
}
export declare class GetOrganizationCameraCustomAnalyticsArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject?: Record<string, any>;
}
