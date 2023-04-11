import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationVirtualMachinesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this virtual machine.
     */
    id: number;
}
export declare class VirtualizationVirtualMachinesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualMachineWithConfigContext?: shared.VirtualMachineWithConfigContext;
}
