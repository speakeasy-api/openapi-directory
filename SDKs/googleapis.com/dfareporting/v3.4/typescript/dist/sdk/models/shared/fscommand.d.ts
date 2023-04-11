import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Position in the browser where the window will open.
 */
export declare enum FsCommandPositionOptionEnum {
    Centered = "CENTERED",
    DistanceFromTopLeftCorner = "DISTANCE_FROM_TOP_LEFT_CORNER"
}
/**
 * FsCommand.
 */
export declare class FsCommand extends SpeakeasyBase {
    /**
     * Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    left?: number;
    /**
     * Position in the browser where the window will open.
     */
    positionOption?: FsCommandPositionOptionEnum;
    /**
     * Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    top?: number;
    /**
     * Height of the window.
     */
    windowHeight?: number;
    /**
     * Width of the window.
     */
    windowWidth?: number;
}
