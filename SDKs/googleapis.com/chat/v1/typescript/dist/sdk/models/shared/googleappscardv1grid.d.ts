import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1GridItem } from "./googleappscardv1griditem";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```
 */
export declare class GoogleAppsCardV1Grid extends SpeakeasyBase {
    /**
     * Represents the complete border style applied to items in a widget.
     */
    borderStyle?: GoogleAppsCardV1BorderStyle;
    /**
     * The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
     */
    columnCount?: number;
    /**
     * The items to display in the grid.
     */
    items?: GoogleAppsCardV1GridItem[];
    /**
     * Represents how to respond when users click an interactive element on a card, such as a button.
     */
    onClick?: GoogleAppsCardV1OnClick;
    /**
     * The text that displays in the grid header.
     */
    title?: string;
}
