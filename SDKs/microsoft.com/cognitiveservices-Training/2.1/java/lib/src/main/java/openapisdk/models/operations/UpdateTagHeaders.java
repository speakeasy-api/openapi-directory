package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public UpdateTagHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}