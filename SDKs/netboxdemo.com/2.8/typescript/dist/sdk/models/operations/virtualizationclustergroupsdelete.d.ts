import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationClusterGroupsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cluster group.
     */
    id: number;
}
export declare class VirtualizationClusterGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
