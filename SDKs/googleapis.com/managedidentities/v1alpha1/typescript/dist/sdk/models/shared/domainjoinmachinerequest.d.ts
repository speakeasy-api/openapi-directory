import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DomainJoinMachineRequest is the request message for DomainJoinMachine method
 */
export declare class DomainJoinMachineRequest extends SpeakeasyBase {
    /**
     * Optional. OU name where the VM needs to be domain joined
     */
    ouName?: string;
    /**
     * Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature
     */
    vmIdToken?: string;
}
