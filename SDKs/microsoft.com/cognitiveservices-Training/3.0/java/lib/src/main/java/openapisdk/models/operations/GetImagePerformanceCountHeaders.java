package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePerformanceCountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetImagePerformanceCountHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}