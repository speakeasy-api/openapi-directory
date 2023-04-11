import { SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";
export declare class ApksAddExternallyHostedRequest extends SpeakeasyBase {
    /**
     * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
     */
    externallyHostedApk?: ExternallyHostedApk;
}
