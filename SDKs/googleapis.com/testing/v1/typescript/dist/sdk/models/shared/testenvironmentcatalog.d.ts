import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceCatalog } from "./androiddevicecatalog";
import { DeviceIpBlockCatalog } from "./deviceipblockcatalog";
import { IosDeviceCatalog } from "./iosdevicecatalog";
import { NetworkConfigurationCatalog } from "./networkconfigurationcatalog";
import { ProvidedSoftwareCatalog } from "./providedsoftwarecatalog";
/**
 * A description of a test environment.
 */
export declare class TestEnvironmentCatalog extends SpeakeasyBase {
    /**
     * The currently supported Android devices.
     */
    androidDeviceCatalog?: AndroidDeviceCatalog;
    /**
     * List of IP blocks used by the Firebase Test Lab
     */
    deviceIpBlockCatalog?: DeviceIpBlockCatalog;
    /**
     * The currently supported iOS devices.
     */
    iosDeviceCatalog?: IosDeviceCatalog;
    networkConfigurationCatalog?: NetworkConfigurationCatalog;
    /**
     * The currently provided software environment on the devices under test.
     */
    softwareCatalog?: ProvidedSoftwareCatalog;
}
