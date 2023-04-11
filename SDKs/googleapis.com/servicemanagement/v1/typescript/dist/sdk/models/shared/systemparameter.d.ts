import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
 */
export declare class SystemParameter extends SpeakeasyBase {
    /**
     * Define the HTTP header name to use for the parameter. It is case insensitive.
     */
    httpHeader?: string;
    /**
     * Define the name of the parameter, such as "api_key" . It is case sensitive.
     */
    name?: string;
    /**
     * Define the URL query parameter name to use for the parameter. It is case sensitive.
     */
    urlQueryParameter?: string;
}
