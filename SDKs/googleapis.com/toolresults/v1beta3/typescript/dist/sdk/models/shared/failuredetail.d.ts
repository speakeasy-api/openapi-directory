import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for an outcome with a FAILURE outcome summary.
 */
export declare class FailureDetail extends SpeakeasyBase {
    /**
     * If the failure was severe because the system (app) under test crashed.
     */
    crashed?: boolean;
    /**
     * If the device ran out of memory during a test, causing the test to crash.
     */
    deviceOutOfMemory?: boolean;
    /**
     * If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl.
     */
    failedRoboscript?: boolean;
    /**
     * If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
     */
    notInstalled?: boolean;
    /**
     * If a native process (including any other than the app) crashed.
     */
    otherNativeCrash?: boolean;
    /**
     * If the test overran some time limit, and that is why it failed.
     */
    timedOut?: boolean;
    /**
     * If the robo was unable to crawl the app; perhaps because the app did not start.
     */
    unableToCrawl?: boolean;
}
