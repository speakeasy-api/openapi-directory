import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the display.
 */
export declare enum DisplayStateEnum {
    DisplayStateUnspecified = "DISPLAY_STATE_UNSPECIFIED",
    Off = "OFF",
    On = "ON",
    Doze = "DOZE",
    Suspended = "SUSPENDED"
}
/**
 * Device display information.
 */
export declare class Display extends SpeakeasyBase {
    /**
     * Display density expressed as dots-per-inch.
     */
    density?: number;
    /**
     * Unique display id.
     */
    displayId?: number;
    /**
     * Display height in pixels.
     */
    height?: number;
    /**
     * Name of the display.
     */
    name?: string;
    /**
     * Refresh rate of the display in frames per second.
     */
    refreshRate?: number;
    /**
     * State of the display.
     */
    state?: DisplayStateEnum;
    /**
     * Display width in pixels.
     */
    width?: number;
}
