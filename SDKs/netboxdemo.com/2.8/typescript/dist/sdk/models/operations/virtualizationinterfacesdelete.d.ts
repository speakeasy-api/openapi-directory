import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class VirtualizationInterfacesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
