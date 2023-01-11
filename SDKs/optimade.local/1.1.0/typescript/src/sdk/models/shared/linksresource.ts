import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BaseRelationshipResource } from "./baserelationshipresource";



// LinksResourceLinksResourceAttributes
/** 
 * Links endpoint resource object attributes
**/
export class LinksResourceLinksResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregate" })
  aggregate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=base_url" })
  baseUrl: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage: any;

  @SpeakeasyMetadata({ data: "json, name=link_type" })
  linkType: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=no_aggregate_reason" })
  noAggregateReason?: string;
}


// LinksResourceResourceLinks
/** 
 * A Resource Links object
**/
export class LinksResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// LinksResourceEntryRelationshipsReferenceRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class LinksResourceEntryRelationshipsReferenceRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/** 
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
export class LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// LinksResourceEntryRelationshipsStructureRelationship
/** 
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
export class LinksResourceEntryRelationshipsStructureRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


// LinksResourceEntryRelationships
/** 
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
export class LinksResourceEntryRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: LinksResourceEntryRelationshipsReferenceRelationship;

  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: LinksResourceEntryRelationshipsStructureRelationship;
}


// LinksResource
/** 
 * A Links endpoint resource object
**/
export class LinksResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: LinksResourceLinksResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LinksResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: LinksResourceEntryRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
