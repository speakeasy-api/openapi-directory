import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxPaymentProfileResetLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sandboxPaymentProfileResetLoginResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
