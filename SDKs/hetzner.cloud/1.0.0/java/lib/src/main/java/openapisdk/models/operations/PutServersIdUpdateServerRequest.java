package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersIdUpdateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PutServersIdUpdateServerRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutServersIdUpdateServerRequest withName(String name) {
        this.name = name;
        return this;
    }
}