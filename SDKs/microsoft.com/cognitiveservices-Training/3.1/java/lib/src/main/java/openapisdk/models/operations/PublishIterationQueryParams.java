package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishIterationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=predictionId")
    public String predictionId;
    public PublishIterationQueryParams withPredictionId(String predictionId) {
        this.predictionId = predictionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publishName")
    public String publishName;
    public PublishIterationQueryParams withPublishName(String publishName) {
        this.publishName = publishName;
        return this;
    }
}