import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class UpdateCredentialPublicKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateCredentialPublicKeyRequest extends SpeakeasyBase {
    requestBody?: UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
    /**
     * The Twilio-provided string that uniquely identifies the PublicKey resource to update.
     */
    sid: string;
}
export declare class UpdateCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
