package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptimadeErrorErrorSource
 * an object containing references to the source of the error
**/
public class OptimadeErrorErrorSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;
    public OptimadeErrorErrorSource withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointer")
    public String pointer;
    public OptimadeErrorErrorSource withPointer(String pointer) {
        this.pointer = pointer;
        return this;
    }
}