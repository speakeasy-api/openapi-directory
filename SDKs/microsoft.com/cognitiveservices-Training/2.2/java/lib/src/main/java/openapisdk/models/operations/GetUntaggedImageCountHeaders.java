package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImageCountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetUntaggedImageCountHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}