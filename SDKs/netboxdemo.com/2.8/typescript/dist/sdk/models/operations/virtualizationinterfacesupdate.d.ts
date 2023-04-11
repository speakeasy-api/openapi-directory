import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
    writableVirtualMachineInterfaceInput: shared.WritableVirtualMachineInterfaceInput;
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualMachineInterface?: shared.VirtualMachineInterface;
}
