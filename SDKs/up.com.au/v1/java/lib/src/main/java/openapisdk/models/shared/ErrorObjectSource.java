package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorObjectSource
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 * 
**/
public class ErrorObjectSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;
    public ErrorObjectSource withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointer")
    public String pointer;
    public ErrorObjectSource withPointer(String pointer) {
        this.pointer = pointer;
        return this;
    }
}