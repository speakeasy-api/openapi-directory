package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiEndpoints
 * objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.
**/
public class ApiEndpoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointName")
    public String endpointName;
    public ApiEndpoints withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpVerb")
    public Object httpVerb;
    public ApiEndpoints withHttpVerb(Object httpVerb) {
        this.httpVerb = httpVerb;
        return this;
    }
}