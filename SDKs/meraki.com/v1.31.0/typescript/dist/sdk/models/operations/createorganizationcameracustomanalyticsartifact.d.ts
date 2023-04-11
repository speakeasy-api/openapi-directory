import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationCameraCustomAnalyticsArtifactRequestBody extends SpeakeasyBase {
    /**
     * Unique name of the artifact
     */
    name?: string;
}
export declare class CreateOrganizationCameraCustomAnalyticsArtifactRequest extends SpeakeasyBase {
    requestBody?: CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationCameraCustomAnalyticsArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject?: Record<string, any>;
}
