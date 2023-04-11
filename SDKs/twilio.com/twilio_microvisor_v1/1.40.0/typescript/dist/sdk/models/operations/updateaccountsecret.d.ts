import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAccountSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateAccountSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAccountSecretUpdateAccountSecretRequest extends SpeakeasyBase {
    /**
     * The secret value; up to 4096 characters.
     */
    value: string;
}
export declare class UpdateAccountSecretRequest extends SpeakeasyBase {
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
    requestBody?: UpdateAccountSecretUpdateAccountSecretRequest;
}
export declare class UpdateAccountSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1AccountSecret?: shared.MicrovisorV1AccountSecret;
}
