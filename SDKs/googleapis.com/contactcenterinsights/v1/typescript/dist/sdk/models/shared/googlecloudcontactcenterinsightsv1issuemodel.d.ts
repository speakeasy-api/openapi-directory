import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig, GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";
/**
 * Output only. State of the model.
 */
export declare enum GoogleCloudContactcenterinsightsV1IssueModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING"
}
/**
 * The issue model resource.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModel extends SpeakeasyBase {
    /**
     * Output only. The time at which this issue model was created.
     */
    createTime?: string;
    /**
     * The representative name for the issue model.
     */
    displayName?: string;
    /**
     * Configs for the input data used to create the issue model.
     */
    inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;
    /**
     * Output only. Number of issues in this issue model.
     */
    issueCount?: string;
    /**
     * Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
     */
    name?: string;
    /**
     * Output only. State of the model.
     */
    state?: GoogleCloudContactcenterinsightsV1IssueModelStateEnum;
    /**
     * Aggregated statistics about an issue model.
     */
    trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
    /**
     * Output only. The most recent time at which the issue model was updated.
     */
    updateTime?: string;
}
/**
 * The issue model resource.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelInput extends SpeakeasyBase {
    /**
     * The representative name for the issue model.
     */
    displayName?: string;
    /**
     * Configs for the input data used to create the issue model.
     */
    inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;
    /**
     * Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
     */
    name?: string;
    /**
     * Aggregated statistics about an issue model.
     */
    trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
}
