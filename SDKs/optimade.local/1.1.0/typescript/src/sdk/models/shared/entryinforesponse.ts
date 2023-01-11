import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryInfoProperty } from "./entryinfoproperty";
import { Link } from "./link";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
import { Resource } from "./resource";



// EntryInfoResponseEntryInfoResource
/** 
 * OPTIMADE information for an entry endpoint
**/
export class EntryInfoResponseEntryInfoResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=formats" })
  formats: string[];

  @SpeakeasyMetadata({ data: "json, name=output_fields_by_format" })
  outputFieldsByFormat: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: EntryInfoProperty })
  properties: Record<string, EntryInfoProperty>;
}


// EntryInfoResponseJsonApi
/** 
 * An object describing the server's implementation
**/
export class EntryInfoResponseJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// EntryInfoResponseToplevelLinks
/** 
 * A set of Links objects, possibly including pagination
**/
export class EntryInfoResponseToplevelLinks extends SpeakeasyBase {
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


// EntryInfoResponseResponseMetaImplementationImplementationMaintainer
/** 
 * Details about the maintainer of the implementation
**/
export class EntryInfoResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


// EntryInfoResponseResponseMetaImplementation
/** 
 * Information on the server implementation
**/
export class EntryInfoResponseResponseMetaImplementation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=issue_tracker" })
  issueTracker?: any;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: EntryInfoResponseResponseMetaImplementationImplementationMaintainer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// EntryInfoResponseResponseMetaProvider
/** 
 * Information on the database provider of the implementation.
**/
export class EntryInfoResponseResponseMetaProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}


// EntryInfoResponseResponseMetaResponseMetaQuery
/** 
 * Information on the query that was requested.
**/
export class EntryInfoResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation: string;
}


// EntryInfoResponseResponseMeta
/** 
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export class EntryInfoResponseResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=data_available" })
  dataAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=data_returned" })
  dataReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation?: EntryInfoResponseResponseMetaImplementation;

  @SpeakeasyMetadata({ data: "json, name=last_id" })
  lastId?: string;

  @SpeakeasyMetadata({ data: "json, name=more_data_available" })
  moreDataAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: EntryInfoResponseResponseMetaProvider;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: EntryInfoResponseResponseMetaResponseMetaQuery;

  @SpeakeasyMetadata({ data: "json, name=response_message" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: any;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Warnings })
  warnings?: Warnings[];
}


// EntryInfoResponse
/** 
 * errors are not allowed
**/
export class EntryInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: EntryInfoResponseEntryInfoResource;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=included", elemType: Resource })
  included?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=jsonapi" })
  jsonapi?: EntryInfoResponseJsonApi;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: EntryInfoResponseToplevelLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: EntryInfoResponseResponseMeta;
}
