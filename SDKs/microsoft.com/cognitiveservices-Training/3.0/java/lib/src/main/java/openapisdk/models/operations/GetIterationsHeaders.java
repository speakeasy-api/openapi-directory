package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIterationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetIterationsHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}