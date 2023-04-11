import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Environments.DeployFlow.
 */
export declare class GoogleCloudDialogflowCxV3DeployFlowRequest extends SpeakeasyBase {
    /**
     * Required. The flow version to deploy. Format: `projects//locations//agents// flows//versions/`.
     */
    flowVersion?: string;
}
