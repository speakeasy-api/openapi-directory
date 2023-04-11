import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAccountSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteAccountSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAccountSecretRequest extends SpeakeasyBase {
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
}
export declare class DeleteAccountSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
