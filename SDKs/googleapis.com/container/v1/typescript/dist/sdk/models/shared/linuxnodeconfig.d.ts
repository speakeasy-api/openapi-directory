import { SpeakeasyBase } from "../../../internal/utils";
/**
 * cgroup_mode specifies the cgroup mode to be used on the node.
 */
export declare enum LinuxNodeConfigCgroupModeEnum {
    CgroupModeUnspecified = "CGROUP_MODE_UNSPECIFIED",
    CgroupModeV1 = "CGROUP_MODE_V1",
    CgroupModeV2 = "CGROUP_MODE_V2"
}
/**
 * Parameters that can be configured on Linux nodes.
 */
export declare class LinuxNodeConfig extends SpeakeasyBase {
    /**
     * cgroup_mode specifies the cgroup mode to be used on the node.
     */
    cgroupMode?: LinuxNodeConfigCgroupModeEnum;
    /**
     * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse
     */
    sysctls?: Record<string, string>;
}
