import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    scope?: string;
    userId?: string;
}
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse extends SpeakeasyBase {
    /**
     * success
     */
    accessToken?: shared.AccessToken;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
