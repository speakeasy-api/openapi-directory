import { SpeakeasyBase } from "../../../internal/utils";
/**
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
 */
export declare class EntityInput extends SpeakeasyBase {
    /**
     * Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.
     */
    fields?: Record<string, any>;
}
/**
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
 */
export declare class Entity extends SpeakeasyBase {
    /**
     * Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.
     */
    fields?: Record<string, any>;
    /**
     * Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
     */
    name?: string;
}
