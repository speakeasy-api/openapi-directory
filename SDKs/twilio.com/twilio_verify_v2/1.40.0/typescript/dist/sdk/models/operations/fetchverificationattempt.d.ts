import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVerificationAttemptServerList: readonly ["https://verify.twilio.com"];
export declare class FetchVerificationAttemptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVerificationAttemptRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of a Verification Attempt
     */
    sid: string;
}
export declare class FetchVerificationAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2VerificationAttempt?: shared.VerifyV2VerificationAttempt;
}
