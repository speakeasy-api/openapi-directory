import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * EntityType message contains metadata information about a single entity type present in the external system.
 */
export declare class EntityType extends SpeakeasyBase {
    /**
     * List containing metadata information about each field of the entity type.
     */
    fields?: Field[];
    /**
     * The name of the entity type.
     */
    name?: string;
}
