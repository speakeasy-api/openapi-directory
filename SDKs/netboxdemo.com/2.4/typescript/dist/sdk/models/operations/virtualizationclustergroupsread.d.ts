import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationClusterGroupsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cluster group.
     */
    id: number;
}
export declare class VirtualizationClusterGroupsReadResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
