package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=explain")
    public String explain;
    public PostCompileQueryParams withExplain(String explain) {
        this.explain = explain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instrument")
    public Boolean instrument;
    public PostCompileQueryParams withInstrument(Boolean instrument) {
        this.instrument = instrument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public PostCompileQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public PostCompileQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}