import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1SettingMetadata } from "./googlecloudresourcesettingsv1settingmetadata";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
/**
 * The schema for settings.
 */
export declare class GoogleCloudResourcesettingsV1Setting extends SpeakeasyBase {
    /**
     * The data in a setting value.
     */
    effectiveValue?: GoogleCloudResourcesettingsV1Value;
    /**
     * A fingerprint used for optimistic concurrency. See UpdateSetting for more details.
     */
    etag?: string;
    /**
     * The data in a setting value.
     */
    localValue?: GoogleCloudResourcesettingsV1Value;
    /**
     * Metadata about a setting which is not editable by the end user.
     */
    metadata?: GoogleCloudResourcesettingsV1SettingMetadata;
    /**
     * The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"
     */
    name?: string;
}
