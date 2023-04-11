import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAccountSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchAccountSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAccountSecretRequest extends SpeakeasyBase {
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
}
export declare class FetchAccountSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1AccountSecret?: shared.MicrovisorV1AccountSecret;
}
