import { SpeakeasyBase } from "../../../internal/utils";
import { SqlAclEntry } from "./sqlaclentry";
/**
 * IP Management configuration.
 */
export declare class SqlIpConfig extends SpeakeasyBase {
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`).
     */
    authorizedNetworks?: SqlAclEntry[];
    /**
     * Whether the instance should be assigned an IPv4 address or not.
     */
    enableIpv4?: boolean;
    /**
     * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.
     */
    privateNetwork?: string;
    /**
     * Whether SSL connections over IP should be enforced or not.
     */
    requireSsl?: boolean;
}
