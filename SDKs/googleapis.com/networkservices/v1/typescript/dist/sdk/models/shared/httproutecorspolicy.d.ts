import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Specification for allowing client side cross-origin requests.
 */
export declare class HttpRouteCorsPolicy extends SpeakeasyBase {
    /**
     * In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false.
     */
    allowCredentials?: boolean;
    /**
     * Specifies the content for Access-Control-Allow-Headers header.
     */
    allowHeaders?: string[];
    /**
     * Specifies the content for Access-Control-Allow-Methods header.
     */
    allowMethods?: string[];
    /**
     * Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.
     */
    allowOriginRegexes?: string[];
    /**
     * Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes.
     */
    allowOrigins?: string[];
    /**
     * If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
     */
    disabled?: boolean;
    /**
     * Specifies the content for Access-Control-Expose-Headers header.
     */
    exposeHeaders?: string[];
    /**
     * Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header.
     */
    maxAge?: string;
}
