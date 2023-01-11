package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RootV1ScoringsConsolidatedDaily200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public Object[] errors;
    public RootV1ScoringsConsolidatedDaily200ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult[] result;
    public RootV1ScoringsConsolidatedDaily200ApplicationJson withResult(RootV1ScoringsConsolidatedDaily200ApplicationJsonResult[] result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Double status;
    public RootV1ScoringsConsolidatedDaily200ApplicationJson withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public RootV1ScoringsConsolidatedDaily200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}