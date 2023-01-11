import { SpeakeasyBase } from "../../../internal/utils";
import { BaseInfoAttributes } from "./baseinfoattributes";
import { Warnings } from "./warnings";
import { ErrorT } from "./error";
import { Resource } from "./resource";
/**
 * A Resource Links object
**/
export declare class InfoResponseBaseInfoResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * Resource objects appear in a JSON API document to represent resources.
**/
export declare class InfoResponseBaseInfoResource extends SpeakeasyBase {
    attributes: BaseInfoAttributes;
    id: string;
    links?: InfoResponseBaseInfoResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: Record<string, any>;
    type: string;
}
/**
 * An object describing the server's implementation
**/
export declare class InfoResponseJsonApi extends SpeakeasyBase {
    meta?: Record<string, any>;
    version?: string;
}
/**
 * A set of Links objects, possibly including pagination
**/
export declare class InfoResponseToplevelLinks extends SpeakeasyBase {
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
export declare class InfoResponseResponseMetaImplementationImplementationMaintainer extends SpeakeasyBase {
    email: string;
}
/**
 * Information on the server implementation
**/
export declare class InfoResponseResponseMetaImplementation extends SpeakeasyBase {
    homepage?: any;
    issueTracker?: any;
    maintainer?: InfoResponseResponseMetaImplementationImplementationMaintainer;
    name?: string;
    sourceUrl?: any;
    version?: string;
}
/**
 * Information on the database provider of the implementation.
**/
export declare class InfoResponseResponseMetaProvider extends SpeakeasyBase {
    description: string;
    homepage?: any;
    name: string;
    prefix: string;
}
/**
 * Information on the query that was requested.
**/
export declare class InfoResponseResponseMetaResponseMetaQuery extends SpeakeasyBase {
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
export declare class InfoResponseResponseMeta extends SpeakeasyBase {
    apiVersion: string;
    dataAvailable?: number;
    dataReturned?: number;
    implementation?: InfoResponseResponseMetaImplementation;
    lastId?: string;
    moreDataAvailable: boolean;
    provider?: InfoResponseResponseMetaProvider;
    query: InfoResponseResponseMetaResponseMetaQuery;
    responseMessage?: string;
    schema?: any;
    timeStamp?: Date;
    warnings?: Warnings[];
}
/**
 * errors are not allowed
**/
export declare class InfoResponse extends SpeakeasyBase {
    data: InfoResponseBaseInfoResource;
    errors?: ErrorT[];
    included?: Resource[];
    jsonapi?: InfoResponseJsonApi;
    links?: InfoResponseToplevelLinks;
    meta: InfoResponseResponseMeta;
}
