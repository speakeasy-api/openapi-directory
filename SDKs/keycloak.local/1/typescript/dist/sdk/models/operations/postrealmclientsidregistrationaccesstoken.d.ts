import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdRegistrationAccessTokenRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsIdRegistrationAccessTokenResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
