import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationClustersDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cluster.
     */
    id: number;
}
export declare class VirtualizationClustersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
