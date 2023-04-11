import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover
 */
export declare enum CreateWorkflowTemplateEnum {
    Failover = "failover"
}
/**
 * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
 */
export declare class CreateWorkflow extends SpeakeasyBase {
    /**
     * The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover
     */
    template?: CreateWorkflowTemplateEnum;
    /**
     * Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.
     */
    workflow?: any[];
}
