import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTollfreeVerificationServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchTollfreeVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTollfreeVerificationRequest extends SpeakeasyBase {
    /**
     * The unique string to identify Tollfree Verification.
     */
    sid: string;
}
export declare class FetchTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
