import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";
/**
 * Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
 */
export declare class AddRolesRequest extends SpeakeasyBase {
    /**
     * Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in '12345' {network} is a network name.
     */
    consumerNetwork?: string;
    /**
     * Required. List of policy bindings to add to shared VPC host project.
     */
    policyBinding?: PolicyBinding[];
}
