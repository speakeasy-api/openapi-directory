import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationCameraOnboardingStatusesRequestBody extends SpeakeasyBase {
    /**
     * Serial of camera
     */
    serial?: string;
    /**
     * Note whether credentials were sent successfully
     */
    wirelessCredentialsSent?: boolean;
}
export declare class UpdateOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationCameraOnboardingStatusesRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject?: Record<string, any>;
}
