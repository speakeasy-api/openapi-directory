import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmClientsIdNodesNodeRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    node: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmClientsIdNodesNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
