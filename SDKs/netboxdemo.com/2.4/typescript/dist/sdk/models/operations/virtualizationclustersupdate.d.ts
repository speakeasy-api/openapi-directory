import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationClustersUpdateRequest extends SpeakeasyBase {
    writableClusterInput: shared.WritableClusterInput;
    /**
     * A unique integer value identifying this cluster.
     */
    id: number;
}
export declare class VirtualizationClustersUpdateResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
