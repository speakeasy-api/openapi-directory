import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceFilter } from "./resourcefilter";
import { ResourceStatus } from "./resourcestatus";
/**
 * Message describing Evaluation object
**/
export declare class Evaluation extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Record<string, string>;
    name?: string;
    resourceFilter?: ResourceFilter;
    resourceStatus?: ResourceStatus;
    ruleNames?: string[];
    ruleVersions?: string[];
    updateTime?: string;
}
/**
 * Message describing Evaluation object
**/
export declare class EvaluationInput extends SpeakeasyBase {
    description?: string;
    labels?: Record<string, string>;
    name?: string;
    resourceFilter?: ResourceFilter;
    resourceStatus?: ResourceStatus;
    ruleNames?: string[];
}
