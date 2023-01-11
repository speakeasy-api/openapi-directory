package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIterationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public UpdateIterationHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}