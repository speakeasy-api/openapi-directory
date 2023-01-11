package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagesFromDataHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public CreateImagesFromDataHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}