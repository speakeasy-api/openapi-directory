import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
 */
export declare class RemoveDnsZoneRequest extends SpeakeasyBase {
    /**
     * Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
     */
    consumerNetwork?: string;
    /**
     * Required. The name for both the private zone in the shared producer host project and the peering zone in the consumer project.
     */
    name?: string;
}
