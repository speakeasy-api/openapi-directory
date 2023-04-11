import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdUserSessionsRequest extends SpeakeasyBase {
    /**
     * Paging offset
     */
    first?: number;
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * Maximum results size (defaults to 100)
     */
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdUserSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
