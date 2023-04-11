import { SpeakeasyBase } from "../../../internal/utils";
import { JsonSchema } from "./jsonschema";
import { RestMethod } from "./restmethod";
import { RestResource } from "./restresource";
/**
 * The scope value.
 */
export declare class RestDescriptionAuthOauth2Scopes extends SpeakeasyBase {
    /**
     * Description of scope.
     */
    description?: string;
}
/**
 * OAuth 2.0 authentication information.
 */
export declare class RestDescriptionAuthOauth2 extends SpeakeasyBase {
    /**
     * Available OAuth 2.0 scopes.
     */
    scopes?: Record<string, RestDescriptionAuthOauth2Scopes>;
}
/**
 * Authentication information.
 */
export declare class RestDescriptionAuth extends SpeakeasyBase {
    /**
     * OAuth 2.0 authentication information.
     */
    oauth2?: RestDescriptionAuthOauth2;
}
/**
 * Links to 16x16 and 32x32 icons representing the API.
 */
export declare class RestDescriptionIcons extends SpeakeasyBase {
    /**
     * The URL of the 16x16 icon.
     */
    x16?: string;
    /**
     * The URL of the 32x32 icon.
     */
    x32?: string;
}
/**
 * Successful response
 */
export declare class RestDescription extends SpeakeasyBase {
    /**
     * Authentication information.
     */
    auth?: RestDescriptionAuth;
    /**
     * [DEPRECATED] The base path for REST requests.
     */
    basePath?: string;
    /**
     * [DEPRECATED] The base URL for REST requests.
     */
    baseUrl?: string;
    /**
     * The path for REST batch requests.
     */
    batchPath?: string;
    /**
     * Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names.
     */
    canonicalName?: string;
    /**
     * The description of this API.
     */
    description?: string;
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string;
    /**
     * A link to human readable documentation for the API.
     */
    documentationLink?: string;
    /**
     * The ETag for this response.
     */
    etag?: string;
    /**
     * Enable exponential backoff for suitable methods in the generated clients.
     */
    exponentialBackoffDefault?: boolean;
    /**
     * A list of supported features for this API.
     */
    features?: string[];
    /**
     * Links to 16x16 and 32x32 icons representing the API.
     */
    icons?: RestDescriptionIcons;
    /**
     * The ID of this API.
     */
    id?: string;
    /**
     * The kind for this response.
     */
    kind?: string;
    /**
     * Labels for the status of this API, such as labs or deprecated.
     */
    labels?: string[];
    /**
     * API-level methods for this API.
     */
    methods?: Record<string, RestMethod>;
    /**
     * The name of this API.
     */
    name?: string;
    /**
     * The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name.
     */
    ownerDomain?: string;
    /**
     * The name of the owner of this API. See ownerDomain.
     */
    ownerName?: string;
    /**
     * The package of the owner of this API. See ownerDomain.
     */
    packagePath?: string;
    /**
     * Common parameters that apply across all apis.
     */
    parameters?: Record<string, JsonSchema>;
    /**
     * The protocol described by this document.
     */
    protocol?: string;
    /**
     * The resources in this API.
     */
    resources?: Record<string, RestResource>;
    /**
     * The version of this API.
     */
    revision?: string;
    /**
     * The root URL under which all API services live.
     */
    rootUrl?: string;
    /**
     * The schemas for this API.
     */
    schemas?: Record<string, JsonSchema>;
    /**
     * The base path for all REST requests.
     */
    servicePath?: string;
    /**
     * The title of this API.
     */
    title?: string;
    /**
     * The version of this API.
     */
    version?: string;
    versionModule?: boolean;
}
