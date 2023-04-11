import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC peering configuration is used to create VPC peering with the consumer's VPC.
 */
export declare class VpcPeeringConfig extends SpeakeasyBase {
    /**
     * Required. A free subnet for peering. (CIDR of /29)
     */
    subnet?: string;
    /**
     * Required. Fully qualified name of the VPC that Database Migration Service will peer to.
     */
    vpcName?: string;
}
