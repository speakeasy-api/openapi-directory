import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification for allowing client-side cross-origin requests. For more information about the W3C recommendation for cross-origin resource sharing (CORS), see Fetch API Living Standard.
 */
export declare class CorsPolicy extends SpeakeasyBase {
    /**
     * In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This field translates to the Access-Control-Allow-Credentials header. Default is false.
     */
    allowCredentials?: boolean;
    /**
     * Specifies the content for the Access-Control-Allow-Headers header.
     */
    allowHeaders?: string[];
    /**
     * Specifies the content for the Access-Control-Allow-Methods header.
     */
    allowMethods?: string[];
    /**
     * Specifies a regular expression that matches allowed origins. For more information about the regular expression syntax, see Syntax. An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL_SELF_MANAGED.
     */
    allowOriginRegexes?: string[];
    /**
     * Specifies the list of origins that is allowed to do CORS requests. An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
     */
    allowOrigins?: string[];
    /**
     * If true, the setting specifies the CORS policy is disabled. The default value of false, which indicates that the CORS policy is in effect.
     */
    disabled?: boolean;
    /**
     * Specifies the content for the Access-Control-Expose-Headers header.
     */
    exposeHeaders?: string[];
    /**
     * Specifies how long results of a preflight request can be cached in seconds. This field translates to the Access-Control-Max-Age header.
     */
    maxAge?: number;
}
