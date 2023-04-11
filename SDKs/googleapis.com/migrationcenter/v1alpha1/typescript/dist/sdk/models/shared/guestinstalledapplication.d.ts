import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Guest installed application information.
 */
export declare class GuestInstalledApplication extends SpeakeasyBase {
    /**
     * Installed application name.
     */
    name?: string;
    /**
     * Source path.
     */
    path?: string;
    /**
     * Date application was installed.
     */
    time?: string;
    /**
     * Installed application vendor.
     */
    vendor?: string;
    /**
     * Installed application version.
     */
    version?: string;
}
