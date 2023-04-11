import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VerifyPayoutRequestBody extends SpeakeasyBase {
    verificationCode?: string;
}
export declare class VerifyPayoutRequest extends SpeakeasyBase {
    requestBody?: VerifyPayoutRequestBody;
    withdrawalsId: string;
    xApiKey?: string;
}
export declare class VerifyPayoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
