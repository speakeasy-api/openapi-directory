package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=explain")
    public String explain;
    public GetQueryQueryParams withExplain(String explain) {
        this.explain = explain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public GetQueryQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetQueryQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetQueryQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}