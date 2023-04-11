import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents configurations for a test case.
 */
export declare class GoogleCloudDialogflowCxV3TestConfig extends SpeakeasyBase {
    /**
     * Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow.
     */
    flow?: string;
    /**
     * The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow.
     */
    page?: string;
    /**
     * Session parameters to be compared when calculating differences.
     */
    trackingParameters?: string[];
}
