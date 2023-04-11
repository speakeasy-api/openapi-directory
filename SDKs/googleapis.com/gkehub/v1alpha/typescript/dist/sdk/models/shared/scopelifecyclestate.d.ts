import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the scope resource.
 */
export declare enum ScopeLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * ScopeLifecycleState describes the state of a Scope resource.
 */
export declare class ScopeLifecycleState extends SpeakeasyBase {
    /**
     * Output only. The current state of the scope resource.
     */
    code?: ScopeLifecycleStateCodeEnum;
}
