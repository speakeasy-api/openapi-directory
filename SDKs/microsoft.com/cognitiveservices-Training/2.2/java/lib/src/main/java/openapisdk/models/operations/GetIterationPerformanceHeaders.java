package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIterationPerformanceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetIterationPerformanceHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}