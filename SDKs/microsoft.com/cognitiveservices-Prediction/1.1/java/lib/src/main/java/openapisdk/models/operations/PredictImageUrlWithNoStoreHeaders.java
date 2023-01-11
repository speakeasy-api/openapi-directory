package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlWithNoStoreHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Prediction-Key")
    public String predictionKey;
    public PredictImageUrlWithNoStoreHeaders withPredictionKey(String predictionKey) {
        this.predictionKey = predictionKey;
        return this;
    }
}