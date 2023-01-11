package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Prediction-Key")
    public String predictionKey;
    public PredictImageHeaders withPredictionKey(String predictionKey) {
        this.predictionKey = predictionKey;
        return this;
    }
}