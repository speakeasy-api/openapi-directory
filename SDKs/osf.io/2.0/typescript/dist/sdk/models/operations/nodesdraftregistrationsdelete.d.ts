import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesDraftRegistrationsDeleteRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the draft registration.
     */
    draftId: string;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
export declare class NodesDraftRegistrationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
