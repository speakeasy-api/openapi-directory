import { SpeakeasyBase } from "../../../internal/utils";
import { ActionResponse } from "./actionresponse";
import { Annotation } from "./annotation";
import { Attachment, AttachmentInput } from "./attachment";
import { Card } from "./card";
import { CardWithId } from "./cardwithid";
import { MatchedUrl } from "./matchedurl";
import { SlashCommand } from "./slashcommand";
import { Space, SpaceInput } from "./space";
import { Thread } from "./thread";
import { User, UserInput } from "./user";
/**
 * A message in Google Chat.
 */
export declare class MessageInput extends SpeakeasyBase {
    /**
     * Parameters that a Chat app can use to configure how its response is posted.
     */
    actionResponse?: ActionResponse;
    /**
     * User-uploaded attachment.
     */
    attachment?: AttachmentInput[];
    /**
     * Deprecated: Use `cards_v2` instead. Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.
     */
    cards?: Card[];
    /**
     * Richly formatted and interactive cards that display UI elements and editable widgets, such as: - Formatted text - Buttons - Clickable images - Checkboxes - Radio buttons - Input widgets. Cards are usually displayed below the text body of a Chat message, but can situationally appear other places, such as [dialogs](https://developers.google.com/chat/how-tos/dialogs). Each card can have a maximum size of 32 KB. The `cardId` is a unique identifier among cards in the same message and for identifying user input values. Currently supported widgets include: - `TextParagraph` - `DecoratedText` - `Image` - `ButtonList` - `Divider` - `TextInput` - `SelectionInput` - `Grid`
     */
    cardsV2?: CardWithId[];
    /**
     * A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    clientAssignedMessageId?: string;
    /**
     * A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
     */
    fallbackText?: string;
    /**
     * Resource name in the form `spaces/* /messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     */
    name?: string;
    /**
     * A user in Google Chat.
     */
    sender?: UserInput;
    /**
     * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
     */
    slashCommand?: SlashCommand;
    /**
     * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
     */
    space?: SpaceInput;
    /**
     * Plain-text body of the message. The first link to an image, video, web page, or other preview-able item generates a preview chip.
     */
    text?: string;
    /**
     * A thread in Google Chat.
     */
    thread?: Thread;
}
/**
 * A message in Google Chat.
 */
export declare class Message extends SpeakeasyBase {
    /**
     * Parameters that a Chat app can use to configure how its response is posted.
     */
    actionResponse?: ActionResponse;
    /**
     * Output only. Annotations associated with the text in this message.
     */
    annotations?: Annotation[];
    /**
     * Output only. Plain-text body of the message with all Chat app mentions stripped out.
     */
    argumentText?: string;
    /**
     * User-uploaded attachment.
     */
    attachment?: Attachment[];
    /**
     * Deprecated: Use `cards_v2` instead. Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.
     */
    cards?: Card[];
    /**
     * Richly formatted and interactive cards that display UI elements and editable widgets, such as: - Formatted text - Buttons - Clickable images - Checkboxes - Radio buttons - Input widgets. Cards are usually displayed below the text body of a Chat message, but can situationally appear other places, such as [dialogs](https://developers.google.com/chat/how-tos/dialogs). Each card can have a maximum size of 32 KB. The `cardId` is a unique identifier among cards in the same message and for identifying user input values. Currently supported widgets include: - `TextParagraph` - `DecoratedText` - `Image` - `ButtonList` - `Divider` - `TextInput` - `SelectionInput` - `Grid`
     */
    cardsV2?: CardWithId[];
    /**
     * A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    clientAssignedMessageId?: string;
    /**
     * Output only. The time at which the message was created in Google Chat server.
     */
    createTime?: string;
    /**
     * A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
     */
    fallbackText?: string;
    /**
     * Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
     */
    lastUpdateTime?: string;
    /**
     * A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
     */
    matchedUrl?: MatchedUrl;
    /**
     * Resource name in the form `spaces/* /messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     */
    name?: string;
    /**
     * A user in Google Chat.
     */
    sender?: User;
    /**
     * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
     */
    slashCommand?: SlashCommand;
    /**
     * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
     */
    space?: Space;
    /**
     * Plain-text body of the message. The first link to an image, video, web page, or other preview-able item generates a preview chip.
     */
    text?: string;
    /**
     * A thread in Google Chat.
     */
    thread?: Thread;
    /**
     * Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.
     */
    threadReply?: boolean;
}
