import { SpeakeasyBase } from "../../../internal/utils";
import { Warnings } from "./warnings";
import { Resource } from "./resource";
import { OptimadeError } from "./optimadeerror";
/**
 * An object describing the server's implementation
**/
export declare class ErrorResponseJsonApi extends SpeakeasyBase {
    meta?: Record<string, any>;
    version?: string;
}
/**
 * A set of Links objects, possibly including pagination
**/
export declare class ErrorResponseToplevelLinks extends SpeakeasyBase {
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
export declare class ErrorResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
    email: string;
}
/**
 * Information on the server implementation
**/
export declare class ErrorResponseResponseMetaImplementation extends SpeakeasyBase {
    homepage?: any;
    issueTracker?: any;
    maintainer?: ErrorResponseResponseMetaImplementationImplementationMaintainer;
    name?: string;
    sourceUrl?: any;
    version?: string;
}
/**
 * Information on the database provider of the implementation.
**/
export declare class ErrorResponseResponseMetaProvider extends SpeakeasyBase {
    description: string;
    homepage?: any;
    name: string;
    prefix: string;
}
/**
 * Information on the query that was requested.
**/
export declare class ErrorResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
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
export declare class ErrorResponseResponseMeta extends SpeakeasyBase {
    apiVersion: string;
    dataAvailable?: number;
    dataReturned?: number;
    implementation?: ErrorResponseResponseMetaImplementation;
    lastId?: string;
    moreDataAvailable: boolean;
    provider?: ErrorResponseResponseMetaProvider;
    query: ErrorResponseResponseMetaResponseMetaQuery;
    responseMessage?: string;
    schema?: any;
    timeStamp?: Date;
    warnings?: Warnings[];
}
/**
 * errors MUST be present and data MUST be skipped
**/
export declare class ErrorResponse extends SpeakeasyBase {
    data?: any;
    errors: OptimadeError[];
    included?: Resource[];
    jsonapi?: ErrorResponseJsonApi;
    links?: ErrorResponseToplevelLinks;
    meta: ErrorResponseResponseMeta;
}
