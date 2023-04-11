import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Single /etc/hosts entry.
 */
export declare class HostsEntry extends SpeakeasyBase {
    /**
     * List of host names / aliases.
     */
    hostNames?: string[];
    /**
     * IP (raw, IPv4/6 agnostic).
     */
    ip?: string;
}
