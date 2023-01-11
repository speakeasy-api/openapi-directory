import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { Warnings } from "./warnings";
import { LinksResource } from "./linksresource";
import { ErrorT } from "./error";
import { EntryResource } from "./entryresource";



// LinksResponseJsonApi
/** 
 * An object describing the server's implementation
**/
export class LinksResponseJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// LinksResponseToplevelLinks
/** 
 * A set of Links objects, possibly including pagination
**/
export class LinksResponseToplevelLinks extends SpeakeasyBase {
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


// LinksResponseResponseMetaImplementationImplementationMaintainer
/** 
 * Details about the maintainer of the implementation
**/
export class LinksResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


// LinksResponseResponseMetaImplementation
/** 
 * Information on the server implementation
**/
export class LinksResponseResponseMetaImplementation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=issue_tracker" })
  issueTracker?: any;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: LinksResponseResponseMetaImplementationImplementationMaintainer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// LinksResponseResponseMetaProvider
/** 
 * Information on the database provider of the implementation.
**/
export class LinksResponseResponseMetaProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}


// LinksResponseResponseMetaResponseMetaQuery
/** 
 * Information on the query that was requested.
**/
export class LinksResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation: string;
}


// LinksResponseResponseMeta
/** 
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export class LinksResponseResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=data_available" })
  dataAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=data_returned" })
  dataReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation?: LinksResponseResponseMetaImplementation;

  @SpeakeasyMetadata({ data: "json, name=last_id" })
  lastId?: string;

  @SpeakeasyMetadata({ data: "json, name=more_data_available" })
  moreDataAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: LinksResponseResponseMetaProvider;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: LinksResponseResponseMetaResponseMetaQuery;

  @SpeakeasyMetadata({ data: "json, name=response_message" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: any;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Warnings })
  warnings?: Warnings[];
}


// LinksResponse
/** 
 * errors are not allowed
**/
export class LinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any;

  @SpeakeasyMetadata({ data: "json, name=jsonapi" })
  jsonapi?: LinksResponseJsonApi;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LinksResponseToplevelLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: LinksResponseResponseMeta;
}
