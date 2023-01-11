package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishAttractionVideosHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TMPS-Correlation-Id")
    public String tmpsCorrelationId;
    public PublishAttractionVideosHeaders withTmpsCorrelationId(String tmpsCorrelationId) {
        this.tmpsCorrelationId = tmpsCorrelationId;
        return this;
    }
}