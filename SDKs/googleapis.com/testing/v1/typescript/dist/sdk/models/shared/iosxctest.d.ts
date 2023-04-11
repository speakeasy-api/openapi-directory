import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
 */
export declare class IosXcTest extends SpeakeasyBase {
    /**
     * Output only. The bundle id for the application under test.
     */
    appBundleId?: string;
    /**
     * The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement.
     */
    testSpecialEntitlements?: boolean;
    /**
     * A reference to a file, used for user inputs.
     */
    testsZip?: FileReference;
    /**
     * The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports.
     */
    xcodeVersion?: string;
    /**
     * A reference to a file, used for user inputs.
     */
    xctestrun?: FileReference;
}
