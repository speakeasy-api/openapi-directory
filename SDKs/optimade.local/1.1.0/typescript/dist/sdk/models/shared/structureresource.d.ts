import { SpeakeasyBase } from "../../../internal/utils";
import { StructureResourceAttributes } from "./structureresourceattributes";
/**
 * A Resource Links object
**/
export declare class StructureResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class StructureResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
    data?: any;
    links?: StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class StructureResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
    data?: any;
    links?: StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export declare class StructureResourceEntryRelationships extends SpeakeasyBase {
    references?: StructureResourceEntryRelationshipsReferenceRelationship;
    structures?: StructureResourceEntryRelationshipsStructureRelationship;
}
/**
 * Representing a structure.
**/
export declare class StructureResource extends SpeakeasyBase {
    attributes: StructureResourceAttributes;
    id: string;
    links?: StructureResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: StructureResourceEntryRelationships;
    type: string;
}
