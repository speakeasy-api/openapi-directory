package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdEvents200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetTargetsTargetIdEvents200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetTargetsTargetIdEvents200ApplicationJson withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetTargetsTargetIdEvents200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_total")
    public Long pageTotal;
    public GetTargetsTargetIdEvents200ApplicationJson withPageTotal(Long pageTotal) {
        this.pageTotal = pageTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Event[] results;
    public GetTargetsTargetIdEvents200ApplicationJson withResults(openapisdk.models.shared.Event[] results) {
        this.results = results;
        return this;
    }
}