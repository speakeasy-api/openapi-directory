package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishIterationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public PublishIterationHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}