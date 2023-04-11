import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a Memcached Node.
 */
export declare class NodeConfig extends SpeakeasyBase {
    /**
     * Required. Number of cpus per Memcached node.
     */
    cpuCount?: number;
    /**
     * Required. Memory size in MiB for each Memcached node.
     */
    memorySizeMb?: number;
}
