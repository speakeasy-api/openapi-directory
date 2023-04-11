import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChatSpacesMessagesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChatSpacesMessagesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChatSpacesMessagesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChatSpacesMessagesCreateSecurity extends SpeakeasyBase {
    option1?: ChatSpacesMessagesCreateSecurityOption1;
    option2?: ChatSpacesMessagesCreateSecurityOption2;
    option3?: ChatSpacesMessagesCreateSecurityOption3;
}
/**
 * Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
 */
export declare enum ChatSpacesMessagesCreateMessageReplyOptionEnum {
    MessageReplyOptionUnspecified = "MESSAGE_REPLY_OPTION_UNSPECIFIED",
    ReplyMessageFallbackToNewThread = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD",
    ReplyMessageOrFail = "REPLY_MESSAGE_OR_FAIL"
}
export declare class ChatSpacesMessagesCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    messageInput?: shared.MessageInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional. A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    messageId?: string;
    /**
     * Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
     */
    messageReplyOption?: ChatSpacesMessagesCreateMessageReplyOptionEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. The resource name of the space in which to create a message. Format: spaces/{space}
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
     */
    requestId?: string;
    /**
     * Optional. Deprecated: Use thread.thread_key instead. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread).
     */
    threadKey?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ChatSpacesMessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    message?: shared.Message;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
