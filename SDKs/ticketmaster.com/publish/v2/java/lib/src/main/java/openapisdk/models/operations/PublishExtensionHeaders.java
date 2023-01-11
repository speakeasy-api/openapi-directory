package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishExtensionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TMPS-Correlation-Id")
    public String tmpsCorrelationId;
    public PublishExtensionHeaders withTmpsCorrelationId(String tmpsCorrelationId) {
        this.tmpsCorrelationId = tmpsCorrelationId;
        return this;
    }
}