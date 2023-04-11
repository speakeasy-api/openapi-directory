import { SpeakeasyBase } from "../../../internal/utils";
import { NestingLevel } from "./nestinglevel";
/**
 * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
 */
export declare class ListProperties extends SpeakeasyBase {
    /**
     * Describes the properties of the bullets at the associated level. A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first.
     */
    nestingLevels?: NestingLevel[];
}
