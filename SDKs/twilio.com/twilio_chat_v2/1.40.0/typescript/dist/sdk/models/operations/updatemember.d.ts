import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMemberServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service.  Note that this parameter should only be used when a Member is being recreated from a backup/separate source.
     */
    dateCreated?: Date;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
     */
    dateUpdated?: Date;
    /**
     * The index of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) that the Member has read within the [Channel](https://www.twilio.com/docs/chat/channels).
     */
    lastConsumedMessageIndex?: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) read event for the Member within the [Channel](https://www.twilio.com/docs/chat/channels).
     */
    lastConsumptionTimestamp?: Date;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) to assign to the member. The default roles are those specified on the [Service](https://www.twilio.com/docs/chat/rest/service-resource).
     */
    roleSid?: string;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Member resource to update belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: UpdateMemberUpdateMemberRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to update the Member resource in.
     */
    serviceSid: string;
    /**
     * The SID of the Member resource to update. This value can be either the Member's `sid` or its `identity` value.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannelMember?: shared.ChatV2ServiceChannelMember;
}
