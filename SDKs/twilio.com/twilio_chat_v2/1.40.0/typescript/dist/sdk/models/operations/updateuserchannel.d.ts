import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserChannelServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserChannelUpdateUserChannelRequest extends SpeakeasyBase {
    /**
     * The index of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) in the [Channel](https://www.twilio.com/docs/chat/channels) that the Member has read.
     */
    lastConsumedMessageIndex?: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) read event for the Member within the [Channel](https://www.twilio.com/docs/chat/channels).
     */
    lastConsumptionTimestamp?: Date;
    notificationLevel?: shared.UserChannelEnumNotificationLevelEnum;
}
export declare class UpdateUserChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) with the User Channel resource to update. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: UpdateUserChannelUpdateUserChannelRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to update the User Channel resource in.
     */
    serviceSid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) to update the User Channel resource from. This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class UpdateUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceUserUserChannel?: shared.ChatV2ServiceUserUserChannel;
}
