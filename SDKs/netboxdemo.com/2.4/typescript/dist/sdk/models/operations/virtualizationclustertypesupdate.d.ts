import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationClusterTypesUpdateRequest extends SpeakeasyBase {
    clusterTypeInput: shared.ClusterTypeInput;
    /**
     * A unique integer value identifying this cluster type.
     */
    id: number;
}
export declare class VirtualizationClusterTypesUpdateResponse extends SpeakeasyBase {
    clusterType?: shared.ClusterType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
