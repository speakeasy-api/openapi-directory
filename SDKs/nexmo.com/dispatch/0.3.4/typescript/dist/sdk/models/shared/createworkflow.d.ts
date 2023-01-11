import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateWorkflowTemplateEnum {
    Failover = "failover"
}
export declare class CreateWorkflow extends SpeakeasyBase {
    template?: CreateWorkflowTemplateEnum;
    workflow?: any[];
}
