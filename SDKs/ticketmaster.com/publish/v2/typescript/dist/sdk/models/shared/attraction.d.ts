import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";
/**
 * Type of the entity
 */
export declare enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Attraction
 */
export declare class Attraction extends SpeakeasyBase {
    /**
     * Indicate if the entity is active, inactive entity won't appear in Discovery API
     */
    active?: boolean;
    /**
     * Additional informations of the entity - multi-lingual fields
     */
    additionalInfos?: Record<string, string>;
    /**
     * Attraction's classifications
     */
    classifications?: Classification[];
    /**
     * Descriptions of the entity - multi-lingual fields
     */
    descriptions?: Record<string, string>;
    /**
     * True if the entity is dicoverable in discovery API
     */
    discoverable?: boolean;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Names of the entity - multi-lingual fields
     */
    names?: Record<string, string>;
    /**
     * References of this entity in an other system. Reference is the exact same entity
     */
    references?: Record<string, string>;
    /**
     * Relationships on the entity, like if the entity is a duplicate of another one
     */
    relationships?: Record<string, any>[];
    /**
     * Source
     */
    source?: Source;
    /**
     * Indicate if this is a test entity, by default test entities won't appear in discovery API
     */
    test?: boolean;
    /**
     * Type of the entity
     */
    type: AttractionTypeEnum;
    /**
     * URL of a web site detail page of the entity
     */
    url?: string;
    /**
     * Version of the entity. Version is to avoid updated an entity with an older version
     */
    version?: number;
}
