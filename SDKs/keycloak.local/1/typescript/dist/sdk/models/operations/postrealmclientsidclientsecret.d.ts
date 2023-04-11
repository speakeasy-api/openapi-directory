import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdClientSecretRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsIdClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    credentialRepresentation?: shared.CredentialRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
