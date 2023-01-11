package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEventHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TMPS-Correlation-Id")
    public String tmpsCorrelationId;
    public PublishEventHeaders withTmpsCorrelationId(String tmpsCorrelationId) {
        this.tmpsCorrelationId = tmpsCorrelationId;
        return this;
    }
}