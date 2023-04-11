import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class CreateCredentialPublicKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCredentialPublicKeyCreateCredentialPublicKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request
     */
    accountSid?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * A URL encoded representation of the public key. For example, `-----BEGIN PUBLIC KEY-----MIIBIjANB.pa9xQIDAQAB-----END PUBLIC KEY-----`
     */
    publicKey: string;
}
export declare class CreateCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
