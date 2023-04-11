import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const RegisterSenderServerList: readonly ["https://rest.nexmo.com"];
export declare class RegisterSenderRequest extends SpeakeasyBase {
    /**
     * Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    registerEmailRequest: shared.RegisterEmailRequest;
}
export declare class RegisterSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    registerEmailResponse?: shared.RegisterEmailResponse;
}
