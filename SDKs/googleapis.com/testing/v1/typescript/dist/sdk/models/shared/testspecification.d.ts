import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { AndroidTestLoop } from "./androidtestloop";
import { IosTestLoop } from "./iostestloop";
import { IosTestSetup } from "./iostestsetup";
import { IosXcTest } from "./iosxctest";
import { TestSetup } from "./testsetup";
/**
 * A description of how to run the test.
 */
export declare class TestSpecification extends SpeakeasyBase {
    /**
     * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
     */
    androidInstrumentationTest?: AndroidInstrumentationTest;
    /**
     * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
     */
    androidRoboTest?: AndroidRoboTest;
    /**
     * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
     */
    androidTestLoop?: AndroidTestLoop;
    /**
     * Disables performance metrics recording. May reduce test latency.
     */
    disablePerformanceMetrics?: boolean;
    /**
     * Disables video recording. May reduce test latency.
     */
    disableVideoRecording?: boolean;
    /**
     * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
     */
    iosTestLoop?: IosTestLoop;
    /**
     * A description of how to set up an iOS device prior to running the test.
     */
    iosTestSetup?: IosTestSetup;
    /**
     * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
     */
    iosXcTest?: IosXcTest;
    /**
     * A description of how to set up the Android device prior to running the test.
     */
    testSetup?: TestSetup;
    /**
     * Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min.
     */
    testTimeout?: string;
}
