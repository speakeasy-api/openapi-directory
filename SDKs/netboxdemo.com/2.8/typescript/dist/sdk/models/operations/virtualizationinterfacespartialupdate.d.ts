import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesPartialUpdateRequest extends SpeakeasyBase {
    writableVirtualMachineInterfaceInput: shared.WritableVirtualMachineInterfaceInput;
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class VirtualizationInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualMachineInterface?: shared.VirtualMachineInterface;
}
