import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfigurationsSettings } from "./managedconfigurationssettings";
/**
 * Successful response
 */
export declare class ManagedConfigurationsSettingsListResponse extends SpeakeasyBase {
    /**
     * A managed configurations settings for an app that may be assigned to a group of users in an enterprise.
     */
    managedConfigurationsSettings?: ManagedConfigurationsSettings[];
}
