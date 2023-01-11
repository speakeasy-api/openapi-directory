package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictMultipartRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageClassificationRequest imageClassificationRequest;
    public PredictMultipartRequests withImageClassificationRequest(openapisdk.models.shared.ImageClassificationRequest imageClassificationRequest) {
        this.imageClassificationRequest = imageClassificationRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.ImageClassificationRequest imageClassificationRequest1;
    public PredictMultipartRequests withImageClassificationRequest1(openapisdk.models.shared.ImageClassificationRequest imageClassificationRequest1) {
        this.imageClassificationRequest1 = imageClassificationRequest1;
        return this;
    }
}