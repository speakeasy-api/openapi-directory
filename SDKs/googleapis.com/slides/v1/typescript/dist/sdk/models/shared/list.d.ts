import { SpeakeasyBase } from "../../../internal/utils";
import { NestingLevel } from "./nestinglevel";
/**
 * A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
 */
export declare class List extends SpeakeasyBase {
    /**
     * The ID of the list.
     */
    listId?: string;
    /**
     * A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive.
     */
    nestingLevel?: Record<string, NestingLevel>;
}
