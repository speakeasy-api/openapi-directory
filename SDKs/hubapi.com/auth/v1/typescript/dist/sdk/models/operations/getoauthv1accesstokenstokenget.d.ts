import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOauthV1AccessTokensTokenGetRequest extends SpeakeasyBase {
    token: string;
}
export declare class GetOauthV1AccessTokensTokenGetResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    accessTokenInfoResponse?: shared.AccessTokenInfoResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
