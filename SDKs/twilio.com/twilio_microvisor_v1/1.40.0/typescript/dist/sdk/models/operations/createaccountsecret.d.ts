import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAccountSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class CreateAccountSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAccountSecretCreateAccountSecretRequest extends SpeakeasyBase {
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
    /**
     * The secret value; up to 4096 characters.
     */
    value: string;
}
export declare class CreateAccountSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    microvisorV1AccountSecret?: shared.MicrovisorV1AccountSecret;
}
