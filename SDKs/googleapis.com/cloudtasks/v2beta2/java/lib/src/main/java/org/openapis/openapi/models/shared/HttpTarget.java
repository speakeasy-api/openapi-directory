/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HttpTarget - HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
 */
public class HttpTarget {
    /**
     * HTTP target headers. This map contains the header field names and values. Headers will be set when running the task is created and/or task is created. These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. * User-Agent: This will be set to `"Google-CloudTasks"`. * `X-Google-*`: Google use only. * `X-AppEngine-*`: Google use only. `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB. Queue-level headers to override headers of all the tasks in the queue.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerOverrides")
    public HeaderOverride[] headerOverrides;

    public HttpTarget withHeaderOverrides(HeaderOverride[] headerOverrides) {
        this.headerOverrides = headerOverrides;
        return this;
    }
    
    /**
     * The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at execution time.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public HttpTargetHttpMethodEnum httpMethod;

    public HttpTarget withHttpMethod(HttpTargetHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    
    /**
     * Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public OAuthToken oauthToken;

    public HttpTarget withOauthToken(OAuthToken oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcToken")
    public OidcToken oidcToken;

    public HttpTarget withOidcToken(OidcToken oidcToken) {
        this.oidcToken = oidcToken;
        return this;
    }
    
    /**
     * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriOverride")
    public UriOverride uriOverride;

    public HttpTarget withUriOverride(UriOverride uriOverride) {
        this.uriOverride = uriOverride;
        return this;
    }
    
    public HttpTarget(){}
}
