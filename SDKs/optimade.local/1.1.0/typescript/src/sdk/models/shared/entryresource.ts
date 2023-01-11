import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BaseRelationshipResource } from "./baserelationshipresource";



// EntryResourceEntryResourceAttributes
/** 
 * Contains key-value pairs representing the entry's properties.
**/
export class EntryResourceEntryResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=immutable_id" })
  immutableId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified: Date;
}


// EntryResourceResourceLinks
/** 
 * A Resource Links object
**/
export class EntryResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// EntryResourceEntryRelationshipsReferenceRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class EntryResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// EntryResourceEntryRelationshipsStructureRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class EntryResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// EntryResourceEntryRelationships
/** 
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export class EntryResourceEntryRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: EntryResourceEntryRelationshipsReferenceRelationship;

  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: EntryResourceEntryRelationshipsStructureRelationship;
}


// EntryResource
/** 
 * The base model for an entry resource.
**/
export class EntryResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: EntryResourceEntryResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: EntryResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: EntryResourceEntryRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
