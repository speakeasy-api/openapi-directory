package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIterationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public DeleteIterationHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}