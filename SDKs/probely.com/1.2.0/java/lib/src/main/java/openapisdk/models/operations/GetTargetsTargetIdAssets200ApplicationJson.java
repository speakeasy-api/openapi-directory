package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdAssets200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetTargetsTargetIdAssets200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetTargetsTargetIdAssets200ApplicationJson withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetTargetsTargetIdAssets200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_total")
    public Long pageTotal;
    public GetTargetsTargetIdAssets200ApplicationJson withPageTotal(Long pageTotal) {
        this.pageTotal = pageTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Asset[] results;
    public GetTargetsTargetIdAssets200ApplicationJson withResults(openapisdk.models.shared.Asset[] results) {
        this.results = results;
        return this;
    }
}