import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Remediation instructions to resolve violation via gcloud cli
 */
export declare class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud extends SpeakeasyBase {
    /**
     * Additional urls for more information about steps
     */
    additionalLinks?: string[];
    /**
     * Gcloud command to resolve violation
     */
    gcloudCommands?: string[];
    /**
     * Steps to resolve violation via gcloud cli
     */
    steps?: string[];
}
