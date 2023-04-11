import { SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";
/**
 * Response for creating a new externally hosted APK.
 */
export declare class ApksAddExternallyHostedResponse extends SpeakeasyBase {
    /**
     * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     */
    externallyHostedApk?: ExternallyHostedApk;
}
