import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links endpoint resource object attributes
**/
export declare class LinksResourceLinksResourceAttributes extends SpeakeasyBase {
    aggregate?: Record<string, any>;
    baseUrl: any;
    description: string;
    homepage: any;
    linkType: Record<string, any>;
    name: string;
    noAggregateReason?: string;
}
/**
 * A Resource Links object
**/
export declare class LinksResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class LinksResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
    data?: any;
    links?: LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class LinksResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
    data?: any;
    links?: LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export declare class LinksResourceEntryRelationships extends SpeakeasyBase {
    references?: LinksResourceEntryRelationshipsReferenceRelationship;
    structures?: LinksResourceEntryRelationshipsStructureRelationship;
}
/**
 * A Links endpoint resource object
**/
export declare class LinksResource extends SpeakeasyBase {
    attributes: LinksResourceLinksResourceAttributes;
    id: string;
    links?: LinksResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: LinksResourceEntryRelationships;
    type: string;
}
