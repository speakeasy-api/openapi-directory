import { SpeakeasyBase } from "../../../internal/utils";
import { CidrBlock } from "./cidrblock";
/**
 * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
 */
export declare class MasterAuthorizedNetworksConfig extends SpeakeasyBase {
    /**
     * Up to 50 external networks that could access Kubernetes master through HTTPS.
     */
    cidrBlocks?: CidrBlock[];
    /**
     * Whether or not master authorized networks feature is enabled.
     */
    enabled?: boolean;
}
