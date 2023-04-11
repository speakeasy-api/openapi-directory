import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationCameraCustomAnalyticsArtifactRequest extends SpeakeasyBase {
    artifactId: string;
    organizationId: string;
}
export declare class DeleteOrganizationCameraCustomAnalyticsArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
