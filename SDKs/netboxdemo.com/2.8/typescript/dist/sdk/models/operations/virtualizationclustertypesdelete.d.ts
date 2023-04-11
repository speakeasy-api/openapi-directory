import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationClusterTypesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cluster type.
     */
    id: number;
}
export declare class VirtualizationClusterTypesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
