import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdTestNodesAvailableRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdTestNodesAvailableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    globalRequestResult?: shared.GlobalRequestResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
