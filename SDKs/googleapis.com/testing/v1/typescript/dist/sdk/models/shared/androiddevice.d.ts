import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single Android device.
 */
export declare class AndroidDevice extends SpeakeasyBase {
    /**
     * Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidModelId?: string;
    /**
     * Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidVersionId?: string;
    /**
     * Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    locale?: string;
    /**
     * Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    orientation?: string;
}
