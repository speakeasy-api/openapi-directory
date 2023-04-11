import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
    writableInterfaceInput: shared.WritableInterfaceInput;
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
