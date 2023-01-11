package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetProjectHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}