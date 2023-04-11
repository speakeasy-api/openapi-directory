import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesDeleteRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
export declare class NodesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
