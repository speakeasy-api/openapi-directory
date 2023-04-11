import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationVirtualMachinesUpdateRequest extends SpeakeasyBase {
    writableVirtualMachineInput: shared.WritableVirtualMachineInput;
    /**
     * A unique integer value identifying this virtual machine.
     */
    id: number;
}
export declare class VirtualizationVirtualMachinesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualMachine?: shared.VirtualMachine;
}
