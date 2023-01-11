import { SpeakeasyBase } from "../../../internal/utils";
import { OrderedJob } from "./orderedjob";
import { TemplateParameter } from "./templateparameter";
import { WorkflowTemplatePlacement } from "./workflowtemplateplacement";
import { WorkflowTemplatePlacementInput } from "./workflowtemplateplacement";
/**
 * A Dataproc workflow template resource.
**/
export declare class WorkflowTemplate extends SpeakeasyBase {
    createTime?: string;
    dagTimeout?: string;
    id?: string;
    jobs?: OrderedJob[];
    labels?: Record<string, string>;
    name?: string;
    parameters?: TemplateParameter[];
    placement?: WorkflowTemplatePlacement;
    updateTime?: string;
    version?: number;
}
/**
 * A Dataproc workflow template resource.
**/
export declare class WorkflowTemplateInput extends SpeakeasyBase {
    dagTimeout?: string;
    id?: string;
    jobs?: OrderedJob[];
    labels?: Record<string, string>;
    parameters?: TemplateParameter[];
    placement?: WorkflowTemplatePlacementInput;
    version?: number;
}
