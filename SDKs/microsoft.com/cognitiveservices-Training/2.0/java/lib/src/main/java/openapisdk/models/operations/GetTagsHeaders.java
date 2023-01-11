package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetTagsHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}