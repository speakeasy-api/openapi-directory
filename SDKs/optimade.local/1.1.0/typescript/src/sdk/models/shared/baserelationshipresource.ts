import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BaseRelationshipResourceBaseRelationshipMeta
/** 
 * Specific meta field for base relationship resource
**/
export class BaseRelationshipResourceBaseRelationshipMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;
}


// BaseRelationshipResource
/** 
 * Minimum requirements to represent a relationship resource
**/
export class BaseRelationshipResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: BaseRelationshipResourceBaseRelationshipMeta;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
