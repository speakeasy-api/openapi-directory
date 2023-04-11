import { SpeakeasyBase } from "../../../internal/utils";
import { ScopeLifecycleState } from "./scopelifecyclestate";
/**
 * Scope represents a Scope in a Fleet.
 */
export declare class ScopeInput extends SpeakeasyBase {
    /**
     * The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}`
     */
    name?: string;
}
/**
 * Scope represents a Scope in a Fleet.
 */
export declare class Scope extends SpeakeasyBase {
    /**
     * Output only. When the scope was created.
     */
    createTime?: string;
    /**
     * Output only. When the scope was deleted.
     */
    deleteTime?: string;
    /**
     * The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}`
     */
    name?: string;
    /**
     * ScopeLifecycleState describes the state of a Scope resource.
     */
    state?: ScopeLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string;
    /**
     * Output only. When the scope was last updated.
     */
    updateTime?: string;
}
