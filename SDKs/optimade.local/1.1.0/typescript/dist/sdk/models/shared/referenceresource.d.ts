import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceResourceAttributes } from "./referenceresourceattributes";
/**
 * A Resource Links object
**/
export declare class ReferenceResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class ReferenceResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
    data?: any;
    links?: ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export declare class ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
    related?: any;
    self?: any;
}
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export declare class ReferenceResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
    data?: any;
    links?: ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
    meta?: Record<string, any>;
}
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export declare class ReferenceResourceEntryRelationships extends SpeakeasyBase {
    references?: ReferenceResourceEntryRelationshipsReferenceRelationship;
    structures?: ReferenceResourceEntryRelationshipsStructureRelationship;
}
/**
 * The `references` entries describe bibliographic references.
 *
 * The following properties are used to provide the bibliographic details:
 *
 * - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
 * - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
 * - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
 *     - **name**: Full name of the person, REQUIRED.
 *     - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
 * - **doi** and **url**: values are strings.
 * - **Requirements/Conventions**:
 *     - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
 *     - **Query**: Support for queries on any of these properties is OPTIONAL.
 *         If supported, filters MAY support only a subset of comparison operators.
 *     - Every references entry MUST contain at least one of the properties.
**/
export declare class ReferenceResource extends SpeakeasyBase {
    attributes: ReferenceResourceAttributes;
    id: string;
    links?: ReferenceResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: ReferenceResourceEntryRelationships;
    type: string;
}
