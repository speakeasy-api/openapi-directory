import { SpeakeasyBase } from "../../../internal/utils";
import { AclEntry } from "./aclentry";
/**
 * IP Management configuration.
 */
export declare class IpConfiguration extends SpeakeasyBase {
    /**
     * The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.`
     */
    allocatedIpRange?: string;
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`).
     */
    authorizedNetworks?: AclEntry[];
    /**
     * Controls connectivity to private IP instances from Google services, such as BigQuery.
     */
    enablePrivatePathForGoogleCloudServices?: boolean;
    /**
     * Whether the instance is assigned a public IP address or not.
     */
    ipv4Enabled?: boolean;
    /**
     * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.
     */
    privateNetwork?: string;
    /**
     * Whether SSL connections over IP are enforced or not.
     */
    requireSsl?: boolean;
}
