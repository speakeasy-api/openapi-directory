import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BaseRelationshipResource } from "./baserelationshipresource";
import { ReferenceResourceAttributes } from "./referenceresourceattributes";



// ReferenceResourceResourceLinks
/** 
 * A Resource Links object
**/
export class ReferenceResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// ReferenceResourceEntryRelationshipsReferenceRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class ReferenceResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// ReferenceResourceEntryRelationshipsStructureRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class ReferenceResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// ReferenceResourceEntryRelationships
/** 
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export class ReferenceResourceEntryRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: ReferenceResourceEntryRelationshipsReferenceRelationship;

  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: ReferenceResourceEntryRelationshipsStructureRelationship;
}


// ReferenceResource
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
export class ReferenceResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: ReferenceResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReferenceResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: ReferenceResourceEntryRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
