import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationVirtualMachinesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this virtual machine.
     */
    id: number;
}
export declare class VirtualizationVirtualMachinesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
