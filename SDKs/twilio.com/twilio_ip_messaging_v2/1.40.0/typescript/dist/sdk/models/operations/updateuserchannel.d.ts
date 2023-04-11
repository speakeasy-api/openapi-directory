import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserChannelUpdateUserChannelRequest extends SpeakeasyBase {
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    notificationLevel?: shared.UserChannelEnumNotificationLevelEnum;
}
export declare class UpdateUserChannelRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: UpdateUserChannelUpdateUserChannelRequest;
    serviceSid: string;
    userSid: string;
}
export declare class UpdateUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceUserUserChannel?: shared.IpMessagingV2ServiceUserUserChannel;
}
