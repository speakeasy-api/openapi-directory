package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Data data;
    public BatchData withData(Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public Long template;
    public BatchData withTemplate(Long template) {
        this.template = template;
        return this;
    }
}