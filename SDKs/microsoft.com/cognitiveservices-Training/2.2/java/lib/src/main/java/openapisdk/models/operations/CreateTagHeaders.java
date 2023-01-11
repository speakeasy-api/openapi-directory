package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public CreateTagHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}