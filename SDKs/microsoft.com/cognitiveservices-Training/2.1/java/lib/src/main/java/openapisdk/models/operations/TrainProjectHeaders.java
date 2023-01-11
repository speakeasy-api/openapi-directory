package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainProjectHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public TrainProjectHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}