package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaggedImageCountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetTaggedImageCountHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}