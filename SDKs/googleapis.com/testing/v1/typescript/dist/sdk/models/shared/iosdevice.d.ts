import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single iOS device.
 */
export declare class IosDevice extends SpeakeasyBase {
    /**
     * Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    iosModelId?: string;
    /**
     * Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    iosVersionId?: string;
    /**
     * Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    locale?: string;
    /**
     * Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    orientation?: string;
}
