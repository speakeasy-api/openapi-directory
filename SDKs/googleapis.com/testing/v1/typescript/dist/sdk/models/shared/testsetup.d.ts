import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Apk } from "./apk";
import { DeviceFile } from "./devicefile";
import { EnvironmentVariable } from "./environmentvariable";
import { SystraceSetup } from "./systracesetup";
/**
 * A description of how to set up the Android device prior to running the test.
 */
export declare class TestSetup extends SpeakeasyBase {
    /**
     * Identifies an account and how to log into it.
     */
    account?: Account;
    /**
     * APKs to install in addition to those being directly tested. Currently capped at 100.
     */
    additionalApks?: Apk[];
    /**
     * List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.
     */
    directoriesToPull?: string[];
    /**
     * Whether to prevent all runtime permissions to be granted at app install
     */
    dontAutograntPermissions?: boolean;
    /**
     * Environment variables to set for the test (only applicable for instrumentation tests).
     */
    environmentVariables?: EnvironmentVariable[];
    /**
     * List of files to push to the device before starting the test.
     */
    filesToPush?: DeviceFile[];
    /**
     * The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
     */
    networkProfile?: string;
    systrace?: SystraceSetup;
}
