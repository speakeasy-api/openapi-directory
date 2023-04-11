import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentCoverageIntent } from "./googleclouddialogflowcxv3beta1intentcoverageintent";
/**
 * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
 */
export declare class GoogleCloudDialogflowCxV3beta1IntentCoverage extends SpeakeasyBase {
    /**
     * The percent of intents in the agent that are covered.
     */
    coverageScore?: number;
    /**
     * The list of Intents present in the agent
     */
    intents?: GoogleCloudDialogflowCxV3beta1IntentCoverageIntent[];
}
