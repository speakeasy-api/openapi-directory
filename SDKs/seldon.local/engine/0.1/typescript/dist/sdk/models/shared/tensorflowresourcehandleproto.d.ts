import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Protocol buffer representing a handle to a tensorflow resource. Handles are not valid across executions, but can be serialized back and forth from within a single run.
 */
export declare class TensorflowResourceHandleProto extends SpeakeasyBase {
    /**
     * Container in which this resource is placed.
     */
    container?: string;
    /**
     * Unique name for the device containing the resource.
     */
    device?: string;
    /**
     * Hash code for the type of the resource. Is only valid in the same device and in the same execution.
     */
    hashCode?: string;
    /**
     * For debug-only, the name of the type pointed to by this handle, if available.
     */
    maybeTypeName?: string;
    /**
     * Unique name of this resource.
     */
    name?: string;
}
