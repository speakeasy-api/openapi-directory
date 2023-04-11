import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VerifyNotificationChannel request.
 */
export declare class VerifyNotificationChannelRequest extends SpeakeasyBase {
    /**
     * Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code).
     */
    code?: string;
}
