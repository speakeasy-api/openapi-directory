import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DomainJoinMachineResponse is the response message for DomainJoinMachine method
 */
export declare class DomainJoinMachineResponse extends SpeakeasyBase {
    /**
     * The response is the offline domain join blob that is returned after running the djoin command. To correctly use the response of the API, please refer to the sample usage.
     */
    domainJoinBlob?: string;
}
