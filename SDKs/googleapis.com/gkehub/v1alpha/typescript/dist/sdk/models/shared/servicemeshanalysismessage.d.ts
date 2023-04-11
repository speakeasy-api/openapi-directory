import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessageBase } from "./servicemeshanalysismessagebase";
/**
 * AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
 */
export declare class ServiceMeshAnalysisMessage extends SpeakeasyBase {
    /**
     * A UI can combine these args with a template (based on message_base.type) to produce an internationalized message.
     */
    args?: Record<string, any>;
    /**
     * A human readable description of what the error means. It is suitable for non-internationalize display purposes.
     */
    description?: string;
    /**
     * AnalysisMessageBase describes some common information that is needed for all messages.
     */
    messageBase?: ServiceMeshAnalysisMessageBase;
    /**
     * A list of strings specifying the resource identifiers that were the cause of message generation. A "path" here may be: * MEMBERSHIP_ID if the cause is a specific member cluster * MEMBERSHIP_ID/(NAMESPACE\/)?RESOURCETYPE/NAME if the cause is a resource in a cluster
     */
    resourcePaths?: string[];
}
