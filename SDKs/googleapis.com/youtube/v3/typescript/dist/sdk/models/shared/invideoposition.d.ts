import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes in which corner of the video the visual widget will appear.
 */
export declare enum InvideoPositionCornerPositionEnum {
    TopLeft = "topLeft",
    TopRight = "topRight",
    BottomLeft = "bottomLeft",
    BottomRight = "bottomRight"
}
/**
 * Defines the position type.
 */
export declare enum InvideoPositionTypeEnum {
    Corner = "corner"
}
/**
 * Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
 */
export declare class InvideoPosition extends SpeakeasyBase {
    /**
     * Describes in which corner of the video the visual widget will appear.
     */
    cornerPosition?: InvideoPositionCornerPositionEnum;
    /**
     * Defines the position type.
     */
    type?: InvideoPositionTypeEnum;
}
