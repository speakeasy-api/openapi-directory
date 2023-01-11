package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Prediction-Key")
    public String predictionKey;
    public PredictImageUrlHeaders withPredictionKey(String predictionKey) {
        this.predictionKey = predictionKey;
        return this;
    }
}