import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.
 */
export declare class Quaternion extends SpeakeasyBase {
    /**
     * The scalar component.
     */
    w?: number;
    /**
     * The x component.
     */
    x?: number;
    /**
     * The y component.
     */
    y?: number;
    /**
     * The z component.
     */
    z?: number;
}
