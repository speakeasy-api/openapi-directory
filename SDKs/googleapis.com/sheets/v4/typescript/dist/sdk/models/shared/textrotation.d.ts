import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rotation applied to text in a cell.
 */
export declare class TextRotation extends SpeakeasyBase {
    /**
     * The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction
     */
    angle?: number;
    /**
     * If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l |
     */
    vertical?: boolean;
}
