package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImagesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetUntaggedImagesHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}