package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=explain")
    public String explain;
    public GetDocumentQueryParams withExplain(String explain) {
        this.explain = explain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=input")
    public java.util.Map<String, Object> input;
    public GetDocumentQueryParams withInput(java.util.Map<String, Object> input) {
        this.input = input;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instrument")
    public Boolean instrument;
    public GetDocumentQueryParams withInstrument(Boolean instrument) {
        this.instrument = instrument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public GetDocumentQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetDocumentQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provenance")
    public Boolean provenance;
    public GetDocumentQueryParams withProvenance(Boolean provenance) {
        this.provenance = provenance;
        return this;
    }
}