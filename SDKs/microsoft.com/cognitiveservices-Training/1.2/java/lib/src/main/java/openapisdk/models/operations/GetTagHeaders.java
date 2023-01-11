package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetTagHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}