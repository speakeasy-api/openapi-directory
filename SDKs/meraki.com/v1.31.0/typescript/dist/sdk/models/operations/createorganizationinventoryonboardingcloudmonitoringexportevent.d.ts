import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody extends SpeakeasyBase {
    /**
     * The type of log event this is recording, e.g. download or opening a banner
     */
    logEvent: string;
    /**
     * Used to describe if this event was the result of a redirect. E.g. a query param if an info banner is being used
     */
    request?: string;
    /**
     * The name of the onboarding distro being downloaded
     */
    targetOS?: string;
    /**
     * A JavaScript UTC datetime stamp for when the even occurred
     */
    timestamp: number;
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject?: Record<string, any>;
}
