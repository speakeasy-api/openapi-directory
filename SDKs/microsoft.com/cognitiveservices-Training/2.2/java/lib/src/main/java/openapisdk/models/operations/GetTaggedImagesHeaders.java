package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaggedImagesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetTaggedImagesHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}