import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class FetchCredentialPublicKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialPublicKeyRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the PublicKey resource to fetch.
     */
    sid: string;
}
export declare class FetchCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
