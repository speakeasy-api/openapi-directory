import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
 */
export declare class ClearAppsDataParams extends SpeakeasyBase {
    /**
     * The package names of the apps whose data will be cleared when the command is executed.
     */
    packageNames?: string[];
}
