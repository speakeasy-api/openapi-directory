import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BaseInfoAttributes } from "./baseinfoattributes";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
import { Resource } from "./resource";



// InfoResponseBaseInfoResourceResourceLinks
/** 
 * A Resource Links object
**/
export class InfoResponseBaseInfoResourceResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// InfoResponseBaseInfoResource
/** 
 * Resource objects appear in a JSON API document to represent resources.
**/
export class InfoResponseBaseInfoResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: BaseInfoAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: InfoResponseBaseInfoResourceResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// InfoResponseJsonApi
/** 
 * An object describing the server's implementation
**/
export class InfoResponseJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// InfoResponseToplevelLinks
/** 
 * A set of Links objects, possibly including pagination
**/
export class InfoResponseToplevelLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: any;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: any;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: any;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: any;

  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: any;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}


// InfoResponseResponseMetaImplementationImplementationMaintainer
/** 
 * Details about the maintainer of the implementation
**/
export class InfoResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


// InfoResponseResponseMetaImplementation
/** 
 * Information on the server implementation
**/
export class InfoResponseResponseMetaImplementation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=issue_tracker" })
  issueTracker?: any;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: InfoResponseResponseMetaImplementationImplementationMaintainer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// InfoResponseResponseMetaProvider
/** 
 * Information on the database provider of the implementation.
**/
export class InfoResponseResponseMetaProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}


// InfoResponseResponseMetaResponseMetaQuery
/** 
 * Information on the query that was requested.
**/
export class InfoResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation: string;
}


// InfoResponseResponseMeta
/** 
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export class InfoResponseResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=data_available" })
  dataAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=data_returned" })
  dataReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation?: InfoResponseResponseMetaImplementation;

  @SpeakeasyMetadata({ data: "json, name=last_id" })
  lastId?: string;

  @SpeakeasyMetadata({ data: "json, name=more_data_available" })
  moreDataAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: InfoResponseResponseMetaProvider;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: InfoResponseResponseMetaResponseMetaQuery;

  @SpeakeasyMetadata({ data: "json, name=response_message" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: any;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Warnings })
  warnings?: Warnings[];
}


// InfoResponse
/** 
 * errors are not allowed
**/
export class InfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: InfoResponseBaseInfoResource;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=included", elemType: Resource })
  included?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=jsonapi" })
  jsonapi?: InfoResponseJsonApi;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: InfoResponseToplevelLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: InfoResponseResponseMeta;
}
