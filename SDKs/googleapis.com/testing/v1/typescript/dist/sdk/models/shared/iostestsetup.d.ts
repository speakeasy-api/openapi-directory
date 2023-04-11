import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { IosDeviceFile } from "./iosdevicefile";
/**
 * A description of how to set up an iOS device prior to running the test.
 */
export declare class IosTestSetup extends SpeakeasyBase {
    /**
     * iOS apps to install in addition to those being directly tested.
     */
    additionalIpas?: FileReference[];
    /**
     * The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
     */
    networkProfile?: string;
    /**
     * List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (such as /Documents) by specifying the bundle ID.
     */
    pullDirectories?: IosDeviceFile[];
    /**
     * List of files to push to the device before starting the test.
     */
    pushFiles?: IosDeviceFile[];
}
