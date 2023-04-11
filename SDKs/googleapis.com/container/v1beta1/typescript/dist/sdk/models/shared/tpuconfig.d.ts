import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for Cloud TPU.
 */
export declare class TpuConfig extends SpeakeasyBase {
    /**
     * Whether Cloud TPU integration is enabled or not.
     */
    enabled?: boolean;
    /**
     * IPv4 CIDR block reserved for Cloud TPU in the VPC.
     */
    ipv4CidrBlock?: string;
    /**
     * Whether to use service networking for Cloud TPU or not.
     */
    useServiceNetworking?: boolean;
}
