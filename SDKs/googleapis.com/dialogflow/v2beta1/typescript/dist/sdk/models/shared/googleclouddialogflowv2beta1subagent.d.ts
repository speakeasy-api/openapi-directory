import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains basic configuration for a sub-agent.
 */
export declare class GoogleCloudDialogflowV2beta1SubAgent extends SpeakeasyBase {
    /**
     * Optional. The unique identifier (`environment name` in dialogflow console) of this sub-agent environment. Assumes draft environment if `environment` is not set.
     */
    environment?: string;
    /**
     * Required. The project of this agent. Format: `projects/` or `projects//locations/`.
     */
    project?: string;
}
