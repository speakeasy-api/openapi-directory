import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuthentication } from "./basicauthentication";
import { PingConfig } from "./pingconfig";
import { ResponseStatusCode } from "./responsestatuscode";
/**
 * The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead.
 */
export declare enum HttpCheckContentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UrlEncoded = "URL_ENCODED",
    UserProvided = "USER_PROVIDED"
}
/**
 * The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET.
 */
export declare enum HttpCheckRequestMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Get = "GET",
    Post = "POST"
}
/**
 * Information involved in an HTTP/HTTPS Uptime check request.
 */
export declare class HttpCheck extends SpeakeasyBase {
    /**
     * If present, the check will only pass if the HTTP response status code is in this set of status codes. If empty, the HTTP status code will only pass if the HTTP status code is 200-299.
     */
    acceptedResponseStatusCodes?: ResponseStatusCode[];
    /**
     * The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
     */
    authInfo?: BasicAuthentication;
    /**
     * The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte.Note: If client libraries aren't used (which performs the conversion automatically) base64 encode your body data since the field is of bytes type.
     */
    body?: string;
    /**
     * The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead.
     */
    contentType?: HttpCheckContentTypeEnum;
    /**
     * A user provided content type header to use for the check. The invalid configurations outlined in the content_type field apply to custom_content_type, as well as the following: 1. content_type is URL_ENCODED and custom_content_type is set. 2. content_type is USER_PROVIDED and custom_content_type is not set.
     */
    customContentType?: string;
    /**
     * The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
     */
    headers?: Record<string, string>;
    /**
     * Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******.
     */
    maskHeaders?: boolean;
    /**
     * Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically.
     */
    path?: string;
    /**
     * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
     */
    pingConfig?: PingConfig;
    /**
     * Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL.
     */
    port?: number;
    /**
     * The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET.
     */
    requestMethod?: HttpCheckRequestMethodEnum;
    /**
     * If true, use HTTPS instead of HTTP to run the check.
     */
    useSsl?: boolean;
    /**
     * Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect.
     */
    validateSsl?: boolean;
}
