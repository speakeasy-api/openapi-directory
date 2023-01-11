package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEngineHttpTarget
 * App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
**/
public class AppEngineHttpTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineRouting")
    public AppEngineRouting appEngineRouting;
    public AppEngineHttpTarget withAppEngineRouting(AppEngineRouting appEngineRouting) {
        this.appEngineRouting = appEngineRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public AppEngineHttpTarget withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public AppEngineHttpTarget withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public AppEngineHttpTargetHttpMethodEnum httpMethod;
    public AppEngineHttpTarget withHttpMethod(AppEngineHttpTargetHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeUri")
    public String relativeUri;
    public AppEngineHttpTarget withRelativeUri(String relativeUri) {
        this.relativeUri = relativeUri;
        return this;
    }
}