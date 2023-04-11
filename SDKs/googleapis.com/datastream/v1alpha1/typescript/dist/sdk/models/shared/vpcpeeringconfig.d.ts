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
     * Required. fully qualified name of the VPC Datastream will peer to.
     */
    vpcName?: string;
}
