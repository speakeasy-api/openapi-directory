import { SpeakeasyBase } from "../../../internal/utils";
import { EntryInfoProperty } from "./entryinfoproperty";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
import { Resource } from "./resource";
/**
 * OPTIMADE information for an entry endpoint
**/
export declare class EntryInfoResponseEntryInfoResource extends SpeakeasyBase {
    description: string;
    formats: string[];
    outputFieldsByFormat: Record<string, string[]>;
    properties: Record<string, EntryInfoProperty>;
}
/**
 * An object describing the server's implementation
**/
export declare class EntryInfoResponseJsonApi extends SpeakeasyBase {
    meta?: Record<string, any>;
    version?: string;
}
/**
 * A set of Links objects, possibly including pagination
**/
export declare class EntryInfoResponseToplevelLinks extends SpeakeasyBase {
    first?: any;
    last?: any;
    next?: any;
    prev?: any;
    related?: any;
    self?: any;
}
/**
 * Details about the maintainer of the implementation
**/
export declare class EntryInfoResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
    email: string;
}
/**
 * Information on the server implementation
**/
export declare class EntryInfoResponseResponseMetaImplementation extends SpeakeasyBase {
    homepage?: any;
    issueTracker?: any;
    maintainer?: EntryInfoResponseResponseMetaImplementationImplementationMaintainer;
    name?: string;
    sourceUrl?: any;
    version?: string;
}
/**
 * Information on the database provider of the implementation.
**/
export declare class EntryInfoResponseResponseMetaProvider extends SpeakeasyBase {
    description: string;
    homepage?: any;
    name: string;
    prefix: string;
}
/**
 * Information on the query that was requested.
**/
export declare class EntryInfoResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
    representation: string;
}
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
export declare class EntryInfoResponseResponseMeta extends SpeakeasyBase {
    apiVersion: string;
    dataAvailable?: number;
    dataReturned?: number;
    implementation?: EntryInfoResponseResponseMetaImplementation;
    lastId?: string;
    moreDataAvailable: boolean;
    provider?: EntryInfoResponseResponseMetaProvider;
    query: EntryInfoResponseResponseMetaResponseMetaQuery;
    responseMessage?: string;
    schema?: any;
    timeStamp?: Date;
    warnings?: Warnings[];
}
/**
 * errors are not allowed
**/
export declare class EntryInfoResponse extends SpeakeasyBase {
    data: EntryInfoResponseEntryInfoResource;
    errors?: ErrorT[];
    included?: Resource[];
    jsonapi?: EntryInfoResponseJsonApi;
    links?: EntryInfoResponseToplevelLinks;
    meta: EntryInfoResponseResponseMeta;
}
