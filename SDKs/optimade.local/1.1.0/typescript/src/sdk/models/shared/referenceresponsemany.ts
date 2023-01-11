import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { Warnings } from "./warnings";
import { ReferenceResource } from "./referenceresource";
import { ErrorT } from "./error";
import { EntryResource } from "./entryresource";



// ReferenceResponseManyJsonApi
/** 
 * An object describing the server's implementation
**/
export class ReferenceResponseManyJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// ReferenceResponseManyToplevelLinks
/** 
 * A set of Links objects, possibly including pagination
**/
export class ReferenceResponseManyToplevelLinks extends SpeakeasyBase {
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


// ReferenceResponseManyResponseMetaImplementationImplementationMaintainer
/** 
 * Details about the maintainer of the implementation
**/
export class ReferenceResponseManyResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


// ReferenceResponseManyResponseMetaImplementation
/** 
 * Information on the server implementation
**/
export class ReferenceResponseManyResponseMetaImplementation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=issue_tracker" })
  issueTracker?: any;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: ReferenceResponseManyResponseMetaImplementationImplementationMaintainer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// ReferenceResponseManyResponseMetaProvider
/** 
 * Information on the database provider of the implementation.
**/
export class ReferenceResponseManyResponseMetaProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}


// ReferenceResponseManyResponseMetaResponseMetaQuery
/** 
 * Information on the query that was requested.
**/
export class ReferenceResponseManyResponseMetaResponseMetaQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation: string;
}


// ReferenceResponseManyResponseMeta
/** 
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export class ReferenceResponseManyResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=data_available" })
  dataAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=data_returned" })
  dataReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation?: ReferenceResponseManyResponseMetaImplementation;

  @SpeakeasyMetadata({ data: "json, name=last_id" })
  lastId?: string;

  @SpeakeasyMetadata({ data: "json, name=more_data_available" })
  moreDataAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ReferenceResponseManyResponseMetaProvider;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: ReferenceResponseManyResponseMetaResponseMetaQuery;

  @SpeakeasyMetadata({ data: "json, name=response_message" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: any;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Warnings })
  warnings?: Warnings[];
}


// ReferenceResponseMany
/** 
 * errors are not allowed
**/
export class ReferenceResponseMany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any;

  @SpeakeasyMetadata({ data: "json, name=jsonapi" })
  jsonapi?: ReferenceResponseManyJsonApi;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReferenceResponseManyToplevelLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ReferenceResponseManyResponseMeta;
}
