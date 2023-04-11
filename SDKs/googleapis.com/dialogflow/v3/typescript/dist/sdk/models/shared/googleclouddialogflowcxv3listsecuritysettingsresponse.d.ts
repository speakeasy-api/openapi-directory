import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SecuritySettings } from "./googleclouddialogflowcxv3securitysettings";
/**
 * The response message for SecuritySettings.ListSecuritySettings.
 */
export declare class GoogleCloudDialogflowCxV3ListSecuritySettingsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of security settings.
     */
    securitySettings?: GoogleCloudDialogflowCxV3SecuritySettings[];
}
