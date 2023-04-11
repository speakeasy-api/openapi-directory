import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole } from "./googlecloudassuredworkloadsv1violationremediationinstructionsconsole";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud } from "./googlecloudassuredworkloadsv1violationremediationinstructionsgcloud";
/**
 * Instructions to remediate violation
 */
export declare class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions extends SpeakeasyBase {
    /**
     * Remediation instructions to resolve violation via cloud console
     */
    consoleInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;
    /**
     * Remediation instructions to resolve violation via gcloud cli
     */
    gcloudInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
}
