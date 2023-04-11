import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceFilter } from "./resourcefilter";
import { ResourceStatus } from "./resourcestatus";
/**
 * Message describing Evaluation object
 */
export declare class Evaluation extends SpeakeasyBase {
    /**
     * Output only. [Output only] Create time stamp
     */
    createTime?: string;
    /**
     * Description of the Evaluation
     */
    description?: string;
    /**
     * Labels as key value pairs
     */
    labels?: Record<string, string>;
    /**
     * name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'
     */
    name?: string;
    /**
     * Message describing resource filters
     */
    resourceFilter?: ResourceFilter;
    /**
     * Message describing resource status
     */
    resourceStatus?: ResourceStatus;
    /**
     * the name of the rule
     */
    ruleNames?: string[];
    /**
     * Output only. [Output only] The updated rule ids if exist.
     */
    ruleVersions?: string[];
    /**
     * Output only. [Output only] Update time stamp
     */
    updateTime?: string;
}
/**
 * Message describing Evaluation object
 */
export declare class EvaluationInput extends SpeakeasyBase {
    /**
     * Description of the Evaluation
     */
    description?: string;
    /**
     * Labels as key value pairs
     */
    labels?: Record<string, string>;
    /**
     * name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'
     */
    name?: string;
    /**
     * Message describing resource filters
     */
    resourceFilter?: ResourceFilter;
    /**
     * Message describing resource status
     */
    resourceStatus?: ResourceStatus;
    /**
     * the name of the rule
     */
    ruleNames?: string[];
}
