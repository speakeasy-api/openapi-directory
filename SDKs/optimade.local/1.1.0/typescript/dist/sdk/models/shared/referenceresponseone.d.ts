import { SpeakeasyBase } from "../../../internal/utils";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
/**
 * An object describing the server's implementation
**/
export declare class ReferenceResponseOneJsonApi extends SpeakeasyBase {
    meta?: Record<string, any>;
    version?: string;
}
/**
 * A set of Links objects, possibly including pagination
**/
export declare class ReferenceResponseOneToplevelLinks extends SpeakeasyBase {
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
export declare class ReferenceResponseOneResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
    email: string;
}
/**
 * Information on the server implementation
**/
export declare class ReferenceResponseOneResponseMetaImplementation extends SpeakeasyBase {
    homepage?: any;
    issueTracker?: any;
    maintainer?: ReferenceResponseOneResponseMetaImplementationImplementationMaintainer;
    name?: string;
    sourceUrl?: any;
    version?: string;
}
/**
 * Information on the database provider of the implementation.
**/
export declare class ReferenceResponseOneResponseMetaProvider extends SpeakeasyBase {
    description: string;
    homepage?: any;
    name: string;
    prefix: string;
}
/**
 * Information on the query that was requested.
**/
export declare class ReferenceResponseOneResponseMetaResponseMetaQuery extends SpeakeasyBase {
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
export declare class ReferenceResponseOneResponseMeta extends SpeakeasyBase {
    apiVersion: string;
    dataAvailable?: number;
    dataReturned?: number;
    implementation?: ReferenceResponseOneResponseMetaImplementation;
    lastId?: string;
    moreDataAvailable: boolean;
    provider?: ReferenceResponseOneResponseMetaProvider;
    query: ReferenceResponseOneResponseMetaResponseMetaQuery;
    responseMessage?: string;
    schema?: any;
    timeStamp?: Date;
    warnings?: Warnings[];
}
/**
 * errors are not allowed
**/
export declare class ReferenceResponseOne extends SpeakeasyBase {
    data: any;
    errors?: ErrorT[];
    included?: any;
    jsonapi?: ReferenceResponseOneJsonApi;
    links?: ReferenceResponseOneToplevelLinks;
    meta: ReferenceResponseOneResponseMeta;
}
