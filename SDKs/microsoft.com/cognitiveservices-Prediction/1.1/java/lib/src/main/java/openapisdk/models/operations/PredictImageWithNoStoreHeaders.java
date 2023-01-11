package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageWithNoStoreHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Prediction-Key")
    public String predictionKey;
    public PredictImageWithNoStoreHeaders withPredictionKey(String predictionKey) {
        this.predictionKey = predictionKey;
        return this;
    }
}