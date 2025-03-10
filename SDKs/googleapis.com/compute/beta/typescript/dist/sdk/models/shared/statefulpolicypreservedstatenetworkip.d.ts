import { SpeakeasyBase } from "../../../internal/utils";
/**
 * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.
 */
export declare enum StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum {
    Never = "NEVER",
    OnPermanentInstanceDeletion = "ON_PERMANENT_INSTANCE_DELETION"
}
export declare class StatefulPolicyPreservedStateNetworkIp extends SpeakeasyBase {
    /**
     * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.
     */
    autoDelete?: StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
}
