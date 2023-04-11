import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Remediation instructions to resolve violation via cloud console
 */
export declare class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole extends SpeakeasyBase {
    /**
     * Additional urls for more information about steps
     */
    additionalLinks?: string[];
    /**
     * Link to console page where violations can be resolved
     */
    consoleUris?: string[];
    /**
     * Steps to resolve violation via cloud console
     */
    steps?: string[];
}
