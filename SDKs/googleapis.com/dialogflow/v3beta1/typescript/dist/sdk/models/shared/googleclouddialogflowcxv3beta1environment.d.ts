import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3beta1environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig } from "./googleclouddialogflowcxv3beta1environmentversionconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3beta1environmentwebhookconfig";
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
 */
export declare class GoogleCloudDialogflowCxV3beta1Environment extends SpeakeasyBase {
    /**
     * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    description?: string;
    /**
     * Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
     */
    displayName?: string;
    /**
     * The name of the environment. Format: `projects//locations//agents//environments/`.
     */
    name?: string;
    /**
     * The configuration for continuous tests.
     */
    testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
    /**
     * Output only. Update time of this environment.
     */
    updateTime?: string;
    /**
     * A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
     */
    versionConfigs?: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[];
    /**
     * Configuration for webhooks.
     */
    webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
 */
export declare class GoogleCloudDialogflowCxV3beta1EnvironmentInput extends SpeakeasyBase {
    /**
     * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    description?: string;
    /**
     * Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
     */
    displayName?: string;
    /**
     * The name of the environment. Format: `projects//locations//agents//environments/`.
     */
    name?: string;
    /**
     * The configuration for continuous tests.
     */
    testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
    /**
     * A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
     */
    versionConfigs?: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[];
    /**
     * Configuration for webhooks.
     */
    webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}
