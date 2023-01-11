package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2HttpGetAction
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
public class GoogleCloudRunV2HttpGetAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpHeaders")
    public GoogleCloudRunV2HttpHeader[] httpHeaders;
    public GoogleCloudRunV2HttpGetAction withHttpHeaders(GoogleCloudRunV2HttpHeader[] httpHeaders) {
        this.httpHeaders = httpHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GoogleCloudRunV2HttpGetAction withPath(String path) {
        this.path = path;
        return this;
    }
}