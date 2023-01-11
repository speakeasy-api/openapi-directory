package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentWithPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=explain")
    public String explain;
    public GetDocumentWithPathQueryParams withExplain(String explain) {
        this.explain = explain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instrument")
    public Boolean instrument;
    public GetDocumentWithPathQueryParams withInstrument(Boolean instrument) {
        this.instrument = instrument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public GetDocumentWithPathQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetDocumentWithPathQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provenance")
    public Boolean provenance;
    public GetDocumentWithPathQueryParams withProvenance(Boolean provenance) {
        this.provenance = provenance;
        return this;
    }
}