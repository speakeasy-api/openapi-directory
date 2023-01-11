package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=explain")
    public String explain;
    public PostQueryQueryParams withExplain(String explain) {
        this.explain = explain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public PostQueryQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public PostQueryQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}