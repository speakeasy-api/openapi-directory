import { SpeakeasyBase } from "../../../internal/utils";
import { PerAppResult } from "./perappresult";
/**
 * Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
 */
export declare class ClearAppsDataStatus extends SpeakeasyBase {
    /**
     * The per-app results, a mapping from package names to the respective clearing result.
     */
    results?: Record<string, PerAppResult>;
}
