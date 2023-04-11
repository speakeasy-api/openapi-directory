import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ImageComponent } from "./googleappscardv1imagecomponent";
/**
 * The layout to use for the grid item.
 */
export declare enum GoogleAppsCardV1GridItemLayoutEnum {
    GridItemLayoutUnspecified = "GRID_ITEM_LAYOUT_UNSPECIFIED",
    TextBelow = "TEXT_BELOW",
    TextAbove = "TEXT_ABOVE"
}
/**
 * Represents a single item in the grid layout.
 */
export declare class GoogleAppsCardV1GridItem extends SpeakeasyBase {
    /**
     * A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.
     */
    id?: string;
    /**
     * Represents an image.
     */
    image?: GoogleAppsCardV1ImageComponent;
    /**
     * The layout to use for the grid item.
     */
    layout?: GoogleAppsCardV1GridItemLayoutEnum;
    /**
     * The grid item's subtitle.
     */
    subtitle?: string;
    /**
     * The grid item's title.
     */
    title?: string;
}
