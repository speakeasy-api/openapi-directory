package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAttractionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TMPS-Correlation-Id")
    public String tmpsCorrelationId;
    public PatchAttractionHeaders withTmpsCorrelationId(String tmpsCorrelationId) {
        this.tmpsCorrelationId = tmpsCorrelationId;
        return this;
    }
}