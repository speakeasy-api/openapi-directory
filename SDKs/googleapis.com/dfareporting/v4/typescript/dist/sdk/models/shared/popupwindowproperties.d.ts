import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetPosition } from "./offsetposition";
import { Size } from "./size";
/**
 * Popup window position either centered or at specific coordinate.
 */
export declare enum PopupWindowPropertiesPositionTypeEnum {
    Center = "CENTER",
    Coordinates = "COORDINATES"
}
/**
 * Popup Window Properties.
 */
export declare class PopupWindowProperties extends SpeakeasyBase {
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    dimension?: Size;
    /**
     * Offset Position.
     */
    offset?: OffsetPosition;
    /**
     * Popup window position either centered or at specific coordinate.
     */
    positionType?: PopupWindowPropertiesPositionTypeEnum;
    /**
     * Whether to display the browser address bar.
     */
    showAddressBar?: boolean;
    /**
     * Whether to display the browser menu bar.
     */
    showMenuBar?: boolean;
    /**
     * Whether to display the browser scroll bar.
     */
    showScrollBar?: boolean;
    /**
     * Whether to display the browser status bar.
     */
    showStatusBar?: boolean;
    /**
     * Whether to display the browser tool bar.
     */
    showToolBar?: boolean;
    /**
     * Title of popup window.
     */
    title?: string;
}
