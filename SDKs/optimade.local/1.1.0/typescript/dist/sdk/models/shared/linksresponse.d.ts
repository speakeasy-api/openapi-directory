import { SpeakeasyBase } from "../../../internal/utils";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
/**
 * An object describing the server's implementation
**/
export declare class LinksResponseJsonApi extends SpeakeasyBase {
    meta?: Record<string, any>;
    version?: string;
}
/**
 * A set of Links objects, possibly including pagination
**/
export declare class LinksResponseToplevelLinks extends SpeakeasyBase {
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
export declare class LinksResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
    email: string;
}
/**
 * Information on the server implementation
**/
export declare class LinksResponseResponseMetaImplementation extends SpeakeasyBase {
    homepage?: any;
    issueTracker?: any;
    maintainer?: LinksResponseResponseMetaImplementationImplementationMaintainer;
    name?: string;
    sourceUrl?: any;
    version?: string;
}
/**
 * Information on the database provider of the implementation.
**/
export declare class LinksResponseResponseMetaProvider extends SpeakeasyBase {
    description: string;
    homepage?: any;
    name: string;
    prefix: string;
}
/**
 * Information on the query that was requested.
**/
export declare class LinksResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
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
export declare class LinksResponseResponseMeta extends SpeakeasyBase {
    apiVersion: string;
    dataAvailable?: number;
    dataReturned?: number;
    implementation?: LinksResponseResponseMetaImplementation;
    lastId?: string;
    moreDataAvailable: boolean;
    provider?: LinksResponseResponseMetaProvider;
    query: LinksResponseResponseMetaResponseMetaQuery;
    responseMessage?: string;
    schema?: any;
    timeStamp?: Date;
    warnings?: Warnings[];
}
/**
 * errors are not allowed
**/
export declare class LinksResponse extends SpeakeasyBase {
    data: any;
    errors?: ErrorT[];
    included?: any;
    jsonapi?: LinksResponseJsonApi;
    links?: LinksResponseToplevelLinks;
    meta: LinksResponseResponseMeta;
}
