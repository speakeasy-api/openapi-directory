import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains key-value pairs representing the entry's properties.
**/
export declare class EntryResourceEntryResourceAttributes extends SpeakeasyBase {
    immutableId?: string;
    lastModified: Date;
}
/**
 * A Resource Links object
**/
export declare class EntryResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class EntryResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
    data?: any;
    links?: EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class EntryResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
    data?: any;
    links?: EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export declare class EntryResourceEntryRelationships extends SpeakeasyBase {
    references?: EntryResourceEntryRelationshipsReferenceRelationship;
    structures?: EntryResourceEntryRelationshipsStructureRelationship;
}
/**
 * The base model for an entry resource.
**/
export declare class EntryResource extends SpeakeasyBase {
    attributes: EntryResourceEntryResourceAttributes;
    id: string;
    links?: EntryResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: EntryResourceEntryRelationships;
    type: string;
}
