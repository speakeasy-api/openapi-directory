import { SpeakeasyBase } from "../../../internal/utils";
import { GcfsConfig } from "./gcfsconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
/**
 * Subset of NodeConfig message that has defaults.
 */
export declare class NodeConfigDefaults extends SpeakeasyBase {
    /**
     * GcfsConfig contains configurations of Google Container File System (image streaming).
     */
    gcfsConfig?: GcfsConfig;
    /**
     * NodePoolLoggingConfig specifies logging configuration for nodepools.
     */
    loggingConfig?: NodePoolLoggingConfig;
}
