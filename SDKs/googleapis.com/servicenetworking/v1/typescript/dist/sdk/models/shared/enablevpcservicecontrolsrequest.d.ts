import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to enable VPC service controls.
 */
export declare class EnableVpcServiceControlsRequest extends SpeakeasyBase {
    /**
     * Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in '12345' {network} is network name.
     */
    consumerNetwork?: string;
}
