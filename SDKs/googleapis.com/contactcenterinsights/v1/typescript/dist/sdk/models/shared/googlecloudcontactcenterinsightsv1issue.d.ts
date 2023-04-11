import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The issue resource.
 */
export declare class GoogleCloudContactcenterinsightsV1Issue extends SpeakeasyBase {
    /**
     * Output only. The time at which this issue was created.
     */
    createTime?: string;
    /**
     * The representative name for the issue.
     */
    displayName?: string;
    /**
     * Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}
     */
    name?: string;
    /**
     * Output only. Resource names of the sample representative utterances that match to this issue.
     */
    sampleUtterances?: string[];
    /**
     * Output only. The most recent time that this issue was updated.
     */
    updateTime?: string;
}
