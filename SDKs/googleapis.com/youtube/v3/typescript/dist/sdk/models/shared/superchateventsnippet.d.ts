import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
import { SuperStickerMetadata } from "./superstickermetadata";
export declare class SuperChatEventSnippet extends SpeakeasyBase {
    /**
     * The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.
     */
    amountMicros?: string;
    /**
     * Channel id where the event occurred.
     */
    channelId?: string;
    /**
     * The text contents of the comment left by the user.
     */
    commentText?: string;
    /**
     * The date and time when the event occurred.
     */
    createdAt?: Date;
    /**
     * The currency in which the purchase was made. ISO 4217.
     */
    currency?: string;
    /**
     * A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.
     */
    displayString?: string;
    /**
     * True if this event is a Super Sticker event.
     */
    isSuperStickerEvent?: boolean;
    /**
     * The tier for the paid message, which is based on the amount of money spent to purchase the message.
     */
    messageType?: number;
    superStickerMetadata?: SuperStickerMetadata;
    supporterDetails?: ChannelProfileDetails;
}
