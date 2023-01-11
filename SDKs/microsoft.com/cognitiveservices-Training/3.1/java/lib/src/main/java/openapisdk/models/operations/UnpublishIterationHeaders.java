package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnpublishIterationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public UnpublishIterationHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}