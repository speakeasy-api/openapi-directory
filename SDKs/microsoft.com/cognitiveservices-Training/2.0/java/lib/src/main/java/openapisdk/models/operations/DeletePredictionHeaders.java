package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePredictionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public DeletePredictionHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}