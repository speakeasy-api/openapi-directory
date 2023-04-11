import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GetNotificationChannelVerificationCode request.
 */
export declare class GetNotificationChannelVerificationCodeRequest extends SpeakeasyBase {
    /**
     * The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code's lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted).
     */
    expireTime?: string;
}
