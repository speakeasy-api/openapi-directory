/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const UpdateServiceUserConversationServerList = [
  "https://conversations.twilio.com",
] as const;

export class UpdateServiceUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class UpdateServiceUserConversationUpdateServiceUserConversationRequest extends SpeakeasyBase {
  /**
   * The index of the last Message in the Conversation that the Participant has read.
   */
  @SpeakeasyMetadata({ data: "form, name=LastReadMessageIndex" })
  lastReadMessageIndex?: number;

  /**
   * The date of the last message read in conversation by the user, given in ISO 8601 format.
   */
  @SpeakeasyMetadata({
    data: "form, name=LastReadTimestamp;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  lastReadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "form, name=NotificationLevel" })
  notificationLevel?: shared.ServiceUserConversationEnumNotificationLevelEnum;
}

export class UpdateServiceUserConversationRequest extends SpeakeasyBase {
  /**
   * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ChatServiceSid",
  })
  chatServiceSid: string;

  /**
   * The unique SID identifier of the Conversation. This value can be either the `sid` or the `unique_name` of the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ConversationSid",
  })
  conversationSid: string;

  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  requestBody?: UpdateServiceUserConversationUpdateServiceUserConversationRequest;

  /**
   * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=UserSid",
  })
  userSid: string;
}

export class UpdateServiceUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
