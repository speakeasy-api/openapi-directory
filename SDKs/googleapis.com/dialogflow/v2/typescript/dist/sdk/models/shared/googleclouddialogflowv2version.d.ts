import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The status of this version. This field is read-only and cannot be set by create and update methods.
 */
export declare enum GoogleCloudDialogflowV2VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Ready = "READY",
    Failed = "FAILED"
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
 */
export declare class GoogleCloudDialogflowV2Version extends SpeakeasyBase {
    /**
     * Output only. The creation time of this version. This field is read-only, i.e., it cannot be set by create and update methods.
     */
    createTime?: string;
    /**
     * Optional. The developer-provided description of this version.
     */
    description?: string;
    /**
     * Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     */
    name?: string;
    /**
     * Output only. The status of this version. This field is read-only and cannot be set by create and update methods.
     */
    status?: GoogleCloudDialogflowV2VersionStatusEnum;
    /**
     * Output only. The sequential number of this version. This field is read-only which means it cannot be set by create and update methods.
     */
    versionNumber?: number;
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
 */
export declare class GoogleCloudDialogflowV2VersionInput extends SpeakeasyBase {
    /**
     * Optional. The developer-provided description of this version.
     */
    description?: string;
}
