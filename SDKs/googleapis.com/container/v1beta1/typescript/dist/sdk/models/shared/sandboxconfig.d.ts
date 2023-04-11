import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the sandbox to use for the node.
 */
export declare enum SandboxConfigTypeEnum {
    Unspecified = "UNSPECIFIED",
    Gvisor = "GVISOR"
}
/**
 * SandboxConfig contains configurations of the sandbox to use for the node.
 */
export declare class SandboxConfig extends SpeakeasyBase {
    /**
     * Type of the sandbox to use for the node (e.g. 'gvisor')
     */
    sandboxType?: string;
    /**
     * Type of the sandbox to use for the node.
     */
    type?: SandboxConfigTypeEnum;
}
