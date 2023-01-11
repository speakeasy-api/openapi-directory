package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IntentMultipartRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IntentPredictRequest intentPredictRequest;
    public IntentMultipartRequests withIntentPredictRequest(openapisdk.models.shared.IntentPredictRequest intentPredictRequest) {
        this.intentPredictRequest = intentPredictRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.IntentPredictRequest intentPredictRequest1;
    public IntentMultipartRequests withIntentPredictRequest1(openapisdk.models.shared.IntentPredictRequest intentPredictRequest1) {
        this.intentPredictRequest1 = intentPredictRequest1;
        return this;
    }
}