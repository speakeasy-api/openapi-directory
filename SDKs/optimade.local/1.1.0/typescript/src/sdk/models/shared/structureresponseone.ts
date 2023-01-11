import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { Warnings } from "./warnings";
import { StructureResource } from "./structureresource";
import { ErrorT } from "./error";
import { EntryResource } from "./entryresource";



// StructureResponseOneJsonApi
/** 
 * An object describing the server's implementation
**/
export class StructureResponseOneJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// StructureResponseOneToplevelLinks
/** 
 * A set of Links objects, possibly including pagination
**/
export class StructureResponseOneToplevelLinks extends SpeakeasyBase {
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


// StructureResponseOneResponseMetaImplementationImplementationMaintainer
/** 
 * Details about the maintainer of the implementation
**/
export class StructureResponseOneResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


// StructureResponseOneResponseMetaImplementation
/** 
 * Information on the server implementation
**/
export class StructureResponseOneResponseMetaImplementation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=issue_tracker" })
  issueTracker?: any;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: StructureResponseOneResponseMetaImplementationImplementationMaintainer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// StructureResponseOneResponseMetaProvider
/** 
 * Information on the database provider of the implementation.
**/
export class StructureResponseOneResponseMetaProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}


// StructureResponseOneResponseMetaResponseMetaQuery
/** 
 * Information on the query that was requested.
**/
export class StructureResponseOneResponseMetaResponseMetaQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation: string;
}


// StructureResponseOneResponseMeta
/** 
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export class StructureResponseOneResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=data_available" })
  dataAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=data_returned" })
  dataReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation?: StructureResponseOneResponseMetaImplementation;

  @SpeakeasyMetadata({ data: "json, name=last_id" })
  lastId?: string;

  @SpeakeasyMetadata({ data: "json, name=more_data_available" })
  moreDataAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: StructureResponseOneResponseMetaProvider;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: StructureResponseOneResponseMetaResponseMetaQuery;

  @SpeakeasyMetadata({ data: "json, name=response_message" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: any;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Warnings })
  warnings?: Warnings[];
}


// StructureResponseOne
/** 
 * errors are not allowed
**/
export class StructureResponseOne extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any;

  @SpeakeasyMetadata({ data: "json, name=jsonapi" })
  jsonapi?: StructureResponseOneJsonApi;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: StructureResponseOneToplevelLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: StructureResponseOneResponseMeta;
}
