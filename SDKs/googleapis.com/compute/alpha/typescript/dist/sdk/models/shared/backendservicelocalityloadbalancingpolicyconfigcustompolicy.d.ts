import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for a custom policy implemented by the user and deployed with the client.
 */
export declare class BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy extends SpeakeasyBase {
    /**
     * An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.
     */
    data?: string;
    /**
     * Identifies the custom policy. The value should match the name of a custom implementation registered on the gRPC clients. It should follow protocol buffer message naming conventions and include the full path (for example, myorg.CustomLbPolicy). The maximum length is 256 characters. Do not specify the same custom policy more than once for a backend. If you do, the configuration is rejected. For an example of how to use this field, see Use a custom policy.
     */
    name?: string;
}
