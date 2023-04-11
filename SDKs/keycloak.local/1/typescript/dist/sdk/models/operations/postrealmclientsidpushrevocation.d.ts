import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdPushRevocationRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsIdPushRevocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    globalRequestResult?: shared.GlobalRequestResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
