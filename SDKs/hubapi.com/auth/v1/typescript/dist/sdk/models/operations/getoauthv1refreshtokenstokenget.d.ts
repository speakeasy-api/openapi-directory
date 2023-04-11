import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOauthV1RefreshTokensTokenGetRequest extends SpeakeasyBase {
    token: string;
}
export declare class GetOauthV1RefreshTokensTokenGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    refreshTokenInfoResponse?: shared.RefreshTokenInfoResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
