import { SpeakeasyBase } from "../../../internal/utils";
import { SqlExternalSyncSettingError } from "./sqlexternalsyncsettingerror";
/**
 * Instance verify external sync settings response.
 */
export declare class SqlInstancesVerifyExternalSyncSettingsResponse extends SpeakeasyBase {
    /**
     * List of migration violations.
     */
    errors?: SqlExternalSyncSettingError[];
    /**
     * This is always `sql#migrationSettingErrorList`.
     */
    kind?: string;
    /**
     * List of migration warnings.
     */
    warnings?: SqlExternalSyncSettingError[];
}
