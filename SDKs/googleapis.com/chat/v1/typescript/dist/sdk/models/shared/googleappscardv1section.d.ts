import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Widget } from "./googleappscardv1widget";
/**
 * A section contains a collection of widgets that are rendered vertically in the order that they are specified.
 */
export declare class GoogleAppsCardV1Section extends SpeakeasyBase {
    /**
     * Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.
     */
    collapsible?: boolean;
    /**
     * Text that appears at the top of a section. Supports [simple HTML formatted text](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    header?: string;
    /**
     * The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.
     */
    uncollapsibleWidgetsCount?: number;
    /**
     * All the widgets in the section. Must contain at least 1 widget.
     */
    widgets?: GoogleAppsCardV1Widget[];
}
