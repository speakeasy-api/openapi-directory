import { SpeakeasyBase } from "../../../internal/utils";
import { WidgetMarkup } from "./widgetmarkup";
/**
 * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
 */
export declare class Section extends SpeakeasyBase {
    /**
     * The header of the section, text formatted supported.
     */
    header?: string;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: WidgetMarkup[];
}
