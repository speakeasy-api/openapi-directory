package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DcimRearPortTemplatesList200ApplicationJson {
    @JsonProperty("count")
    public Long count;
    public DcimRearPortTemplatesList200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public DcimRearPortTemplatesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public DcimRearPortTemplatesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonProperty("results")
    public openapisdk.models.shared.RearPortTemplate[] results;
    public DcimRearPortTemplatesList200ApplicationJson withResults(openapisdk.models.shared.RearPortTemplate[] results) {
        this.results = results;
        return this;
    }
}