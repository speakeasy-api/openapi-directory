import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the Namespace resource.
 */
export declare enum NamespaceLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * NamespaceLifecycleState describes the state of a Namespace resource.
 */
export declare class NamespaceLifecycleState extends SpeakeasyBase {
    /**
     * Output only. The current state of the Namespace resource.
     */
    code?: NamespaceLifecycleStateCodeEnum;
}
