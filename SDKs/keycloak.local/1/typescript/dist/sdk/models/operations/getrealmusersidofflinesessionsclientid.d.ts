import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdOfflineSessionsClientIdRequest extends SpeakeasyBase {
    clientId: string;
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmUsersIdOfflineSessionsClientIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
