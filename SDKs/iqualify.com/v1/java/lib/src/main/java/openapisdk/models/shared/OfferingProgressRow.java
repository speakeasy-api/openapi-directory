package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferingProgressRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion")
    public String completion;
    public OfferingProgressRow withCompletion(String completion) {
        this.completion = completion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OfferingProgressRow withId(String id) {
        this.id = id;
        return this;
    }
}