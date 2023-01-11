import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BaseRelationshipResource } from "./baserelationshipresource";
import { StructureResourceAttributes } from "./structureresourceattributes";



// StructureResourceResourceLinks
/** 
 * A Resource Links object
**/
export class StructureResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// StructureResourceEntryRelationshipsReferenceRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class StructureResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// StructureResourceEntryRelationshipsStructureRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class StructureResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// StructureResourceEntryRelationships
/** 
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export class StructureResourceEntryRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: StructureResourceEntryRelationshipsReferenceRelationship;

  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: StructureResourceEntryRelationshipsStructureRelationship;
}


// StructureResource
/** 
 * Representing a structure.
**/
export class StructureResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: StructureResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: StructureResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: StructureResourceEntryRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
