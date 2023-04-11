import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ButtonList } from "./googleappscardv1buttonlist";
import { GoogleAppsCardV1DateTimePicker } from "./googleappscardv1datetimepicker";
import { GoogleAppsCardV1DecoratedText } from "./googleappscardv1decoratedtext";
import { GoogleAppsCardV1Grid } from "./googleappscardv1grid";
import { GoogleAppsCardV1Image } from "./googleappscardv1image";
import { GoogleAppsCardV1SelectionInput } from "./googleappscardv1selectioninput";
import { GoogleAppsCardV1TextInput } from "./googleappscardv1textinput";
import { GoogleAppsCardV1TextParagraph } from "./googleappscardv1textparagraph";
/**
 * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
 */
export declare class GoogleAppsCardV1Widget extends SpeakeasyBase {
    /**
     * A list of buttons layed out horizontally.
     */
    buttonList?: GoogleAppsCardV1ButtonList;
    /**
     * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
     */
    dateTimePicker?: GoogleAppsCardV1DateTimePicker;
    /**
     * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
     */
    decoratedText?: GoogleAppsCardV1DecoratedText;
    /**
     * Displays a divider between widgets, a horizontal line. For example, the following JSON creates a divider: ``` "divider": {} ```
     */
    divider?: Record<string, any>;
    /**
     * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```
     */
    grid?: GoogleAppsCardV1Grid;
    /**
     * An image that is specified by a URL and can have an `onClick` action.
     */
    image?: GoogleAppsCardV1Image;
    /**
     * A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead.
     */
    selectionInput?: GoogleAppsCardV1SelectionInput;
    /**
     * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead.
     */
    textInput?: GoogleAppsCardV1TextInput;
    /**
     * A paragraph of text that supports formatting. See [Text formatting](https://developers.google.com/workspace/add-ons/concepts/widgets#text_formatting) for details.
     */
    textParagraph?: GoogleAppsCardV1TextParagraph;
}
