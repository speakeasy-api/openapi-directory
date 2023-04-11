import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
 */
export declare class VpcPeeringConfig extends SpeakeasyBase {
    /**
     * Required. A free subnet for peering. (CIDR of /29)
     */
    subnet?: string;
    /**
     * Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}`
     */
    vpc?: string;
}
