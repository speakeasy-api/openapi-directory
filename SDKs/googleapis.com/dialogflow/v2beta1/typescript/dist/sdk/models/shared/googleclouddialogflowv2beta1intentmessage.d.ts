import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCard } from "./googleclouddialogflowv2beta1intentmessagebasiccard";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageCard } from "./googleclouddialogflowv2beta1intentmessagecard";
import { GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect } from "./googleclouddialogflowv2beta1intentmessagecarouselselect";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2beta1intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelect } from "./googleclouddialogflowv2beta1intentmessagelistselect";
import { GoogleCloudDialogflowV2beta1IntentMessageMediaContent } from "./googleclouddialogflowv2beta1intentmessagemediacontent";
import { GoogleCloudDialogflowV2beta1IntentMessageQuickReplies } from "./googleclouddialogflowv2beta1intentmessagequickreplies";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard } from "./googleclouddialogflowv2beta1intentmessagerbmcarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard } from "./googleclouddialogflowv2beta1intentmessagerbmstandalonecard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmText } from "./googleclouddialogflowv2beta1intentmessagerbmtext";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses } from "./googleclouddialogflowv2beta1intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2beta1IntentMessageSuggestions } from "./googleclouddialogflowv2beta1intentmessagesuggestions";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCard } from "./googleclouddialogflowv2beta1intentmessagetablecard";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio } from "./googleclouddialogflowv2beta1intentmessagetelephonyplayaudio";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech } from "./googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1intentmessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1IntentMessageText } from "./googleclouddialogflowv2beta1intentmessagetext";
/**
 * Optional. The platform that this message is intended for.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Facebook = "FACEBOOK",
    Slack = "SLACK",
    Telegram = "TELEGRAM",
    Kik = "KIK",
    Skype = "SKYPE",
    Line = "LINE",
    Viber = "VIBER",
    ActionsOnGoogle = "ACTIONS_ON_GOOGLE",
    Telephony = "TELEPHONY",
    GoogleHangouts = "GOOGLE_HANGOUTS"
}
/**
 * Corresponds to the `Response` field in the Dialogflow console.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessage extends SpeakeasyBase {
    /**
     * The basic card message. Useful for displaying information.
     */
    basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
    /**
     * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
     */
    browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
    /**
     * The card response message.
     */
    card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
    /**
     * The card for presenting a carousel of options to select from.
     */
    carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
     */
    linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
    /**
     * The card for presenting a list of options to select from.
     */
    listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
    /**
     * The media content card for Actions on Google.
     */
    mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: Record<string, any>;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
    /**
     * The quick replies response message.
     */
    quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
    /**
     * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
     */
    rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
    /**
     * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
     */
    rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
    /**
     * Rich Business Messaging (RBM) text response with suggestions.
     */
    rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
    /**
     * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
     */
    simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    /**
     * The collection of suggestions.
     */
    suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    /**
     * Table card for Actions on Google.
     */
    tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
    /**
     * Plays audio from a file in Telephony Gateway.
     */
    telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
    /**
     * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
     */
    telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
    /**
     * Transfers the call in Telephony Gateway.
     */
    telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
    /**
     * The text response message.
     */
    text?: GoogleCloudDialogflowV2beta1IntentMessageText;
}
