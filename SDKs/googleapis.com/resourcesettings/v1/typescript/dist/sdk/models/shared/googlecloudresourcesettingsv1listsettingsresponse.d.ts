import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Setting } from "./googlecloudresourcesettingsv1setting";
/**
 * The response from ListSettings.
 */
export declare class GoogleCloudResourcesettingsV1ListSettingsResponse extends SpeakeasyBase {
    /**
     * Unused. A page token used to retrieve the next page.
     */
    nextPageToken?: string;
    /**
     * A list of settings that are available at the specified Cloud resource.
     */
    settings?: GoogleCloudResourcesettingsV1Setting[];
}
