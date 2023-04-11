import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingPolicy } from "./autoscalingpolicy";
/**
 * A response to a request to list autoscaling policies in a project.
 */
export declare class ListAutoscalingPoliciesResponse extends SpeakeasyBase {
    /**
     * Output only. This token is included in the response if there are more results to fetch.
     */
    nextPageToken?: string;
    /**
     * Output only. Autoscaling policies list.
     */
    policies?: AutoscalingPolicy[];
}
