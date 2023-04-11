import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
import { GoogleAppsCardV1SwitchControl } from "./googleappscardv1switchcontrol";
/**
 * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
 */
export declare class GoogleAppsCardV1DecoratedText extends SpeakeasyBase {
    /**
     * The text that appears below `text`. Always truncates.
     */
    bottomLabel?: string;
    /**
     * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action. Currently supported in Chat apps (including [dialogs] (https://developers.google.com/chat/how-tos/dialogs) and [card messages] (https://developers.google.com/chat/api/guides/message-formats/cards)) and Google Workspace Add-ons.
     */
    button?: GoogleAppsCardV1Button;
    /**
     * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
     */
    endIcon?: GoogleAppsCardV1Icon;
    /**
     * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
     */
    icon?: GoogleAppsCardV1Icon;
    /**
     * Represents how to respond when users click an interactive element on a card, such as a button.
     */
    onClick?: GoogleAppsCardV1OnClick;
    /**
     * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
     */
    startIcon?: GoogleAppsCardV1Icon;
    /**
     * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget.
     */
    switchControl?: GoogleAppsCardV1SwitchControl;
    /**
     * Required. The primary text. Supports simple formatting. See Text formatting for formatting details.
     */
    text?: string;
    /**
     * The text that appears above `text`. Always truncates.
     */
    topLabel?: string;
    /**
     * The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`.
     */
    wrapText?: boolean;
}
