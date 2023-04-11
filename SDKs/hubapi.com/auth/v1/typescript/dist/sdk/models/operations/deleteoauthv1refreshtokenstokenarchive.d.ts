import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOauthV1RefreshTokensTokenArchiveRequest extends SpeakeasyBase {
    token: string;
}
export declare class DeleteOauthV1RefreshTokensTokenArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
