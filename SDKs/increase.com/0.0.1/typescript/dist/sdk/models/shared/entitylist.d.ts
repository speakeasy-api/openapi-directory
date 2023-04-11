import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * A list of Entity objects
 */
export declare class EntityList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Entity[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
