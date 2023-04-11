import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCard } from "./googleclouddialogflowv2intentmessagebasiccard";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2IntentMessageCard } from "./googleclouddialogflowv2intentmessagecard";
import { GoogleCloudDialogflowV2IntentMessageCarouselSelect } from "./googleclouddialogflowv2intentmessagecarouselselect";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2IntentMessageListSelect } from "./googleclouddialogflowv2intentmessagelistselect";
import { GoogleCloudDialogflowV2IntentMessageMediaContent } from "./googleclouddialogflowv2intentmessagemediacontent";
import { GoogleCloudDialogflowV2IntentMessageQuickReplies } from "./googleclouddialogflowv2intentmessagequickreplies";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponses } from "./googleclouddialogflowv2intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2IntentMessageSuggestions } from "./googleclouddialogflowv2intentmessagesuggestions";
import { GoogleCloudDialogflowV2IntentMessageTableCard } from "./googleclouddialogflowv2intentmessagetablecard";
import { GoogleCloudDialogflowV2IntentMessageText } from "./googleclouddialogflowv2intentmessagetext";
/**
 * Optional. The platform that this message is intended for.
 */
export declare enum GoogleCloudDialogflowV2IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Facebook = "FACEBOOK",
    Slack = "SLACK",
    Telegram = "TELEGRAM",
    Kik = "KIK",
    Skype = "SKYPE",
    Line = "LINE",
    Viber = "VIBER",
    ActionsOnGoogle = "ACTIONS_ON_GOOGLE",
    GoogleHangouts = "GOOGLE_HANGOUTS"
}
/**
 * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
 */
export declare class GoogleCloudDialogflowV2IntentMessage extends SpeakeasyBase {
    /**
     * The basic card message. Useful for displaying information.
     */
    basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
    /**
     * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
     */
    browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
    /**
     * The card response message.
     */
    card?: GoogleCloudDialogflowV2IntentMessageCard;
    /**
     * The card for presenting a carousel of options to select from.
     */
    carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
     */
    linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
    /**
     * The card for presenting a list of options to select from.
     */
    listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
    /**
     * The media content card for Actions on Google.
     */
    mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: Record<string, any>;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: GoogleCloudDialogflowV2IntentMessagePlatformEnum;
    /**
     * The quick replies response message.
     */
    quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
    /**
     * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
     */
    simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
    /**
     * The collection of suggestions.
     */
    suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
    /**
     * Table card for Actions on Google.
     */
    tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
    /**
     * The text response message.
     */
    text?: GoogleCloudDialogflowV2IntentMessageText;
}
