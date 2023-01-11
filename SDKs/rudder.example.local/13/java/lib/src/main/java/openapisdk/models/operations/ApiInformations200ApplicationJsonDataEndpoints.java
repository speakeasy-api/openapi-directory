package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiInformations200ApplicationJsonDataEndpoints
 * Supported path and version for that endpoint
**/
public class ApiInformations200ApplicationJsonDataEndpoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpVerb")
    public Object httpVerb;
    public ApiInformations200ApplicationJsonDataEndpoints withHttpVerb(Object httpVerb) {
        this.httpVerb = httpVerb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public openapisdk.models.shared.ApiVersion version;
    public ApiInformations200ApplicationJsonDataEndpoints withVersion(openapisdk.models.shared.ApiVersion version) {
        this.version = version;
        return this;
    }
}