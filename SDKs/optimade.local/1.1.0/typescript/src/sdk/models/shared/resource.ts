import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// ResourceResourceLinks
/** 
 * A Resource Links object
**/
export class ResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// Resource
/** 
 * Resource objects appear in a JSON API document to represent resources.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
