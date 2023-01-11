package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectMultipartRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectDetectionRequest objectDetectionRequest;
    public DetectMultipartRequests withObjectDetectionRequest(openapisdk.models.shared.ObjectDetectionRequest objectDetectionRequest) {
        this.objectDetectionRequest = objectDetectionRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.ObjectDetectionRequest objectDetectionRequest1;
    public DetectMultipartRequests withObjectDetectionRequest1(openapisdk.models.shared.ObjectDetectionRequest objectDetectionRequest1) {
        this.objectDetectionRequest1 = objectDetectionRequest1;
        return this;
    }
}