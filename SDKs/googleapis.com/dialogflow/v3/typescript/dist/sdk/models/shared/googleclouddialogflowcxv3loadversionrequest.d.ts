import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Versions.LoadVersion.
 */
export declare class GoogleCloudDialogflowCxV3LoadVersionRequest extends SpeakeasyBase {
    /**
     * This field is used to prevent accidental overwrite of other agent resources, which can potentially impact other flow's behavior. If `allow_override_agent_resources` is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks).
     */
    allowOverrideAgentResources?: boolean;
}
