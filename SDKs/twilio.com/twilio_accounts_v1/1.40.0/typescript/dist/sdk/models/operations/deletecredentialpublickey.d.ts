import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class DeleteCredentialPublicKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCredentialPublicKeyRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the PublicKey resource to delete.
     */
    sid: string;
}
export declare class DeleteCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
