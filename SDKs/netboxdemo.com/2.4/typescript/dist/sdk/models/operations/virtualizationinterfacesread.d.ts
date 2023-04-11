import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class VirtualizationInterfacesReadResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
