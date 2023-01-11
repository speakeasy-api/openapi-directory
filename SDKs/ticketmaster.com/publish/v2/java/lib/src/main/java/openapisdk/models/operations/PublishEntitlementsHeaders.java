package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEntitlementsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TMPS-Correlation-Id")
    public String tmpsCorrelationId;
    public PublishEntitlementsHeaders withTmpsCorrelationId(String tmpsCorrelationId) {
        this.tmpsCorrelationId = tmpsCorrelationId;
        return this;
    }
}