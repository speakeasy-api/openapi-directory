package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public DeleteProjectHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}