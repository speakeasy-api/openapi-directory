/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetuserConversationsRequest extends SpeakeasyBase {
  /**
   * User ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=user_id",
  })
  userId: string;
}

export class GetuserConversations200ApplicationJSONTimestamp extends SpeakeasyBase {
  /**
   * Timestamp
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  created?: string;
}

export class GetuserConversations200ApplicationJSON extends SpeakeasyBase {
  /**
   * The display name for the conversation. It does not have to be unique
   */
  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  /**
   * A link towards a resources included in Conversation API
   */
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;

  /**
   * The unique identifier for this conversation
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * A link to an image for conversations' and users' avatars
   */
  @SpeakeasyMetadata()
  @Expose({ name: "image_url" })
  imageUrl?: string;

  /**
   * Member ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "member_id" })
  memberId?: string;

  /**
   * Unique name for a conversation
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * the id of the last event of the conversation (event's id is an incremental number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sequence_number" })
  sequenceNumber?: number;

  /**
   * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: shared.MemberStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Type(() => GetuserConversations200ApplicationJSONTimestamp)
  timestamp?: GetuserConversations200ApplicationJSONTimestamp;
}

export class GetuserConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * List user conversations
   */
  @SpeakeasyMetadata({ elemType: GetuserConversations200ApplicationJSON })
  getuserConversations200ApplicationJSONObjects?: GetuserConversations200ApplicationJSON[];
}
