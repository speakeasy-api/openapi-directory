package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceVideosAnnotateRequest {
    public VideointelligenceVideosAnnotateQueryParams queryParams;
    public VideointelligenceVideosAnnotateRequest withQueryParams(VideointelligenceVideosAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVideointelligenceV1AnnotateVideoRequest request;
    public VideointelligenceVideosAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVideointelligenceV1AnnotateVideoRequest request) {
        this.request = request;
        return this;
    }
    public VideointelligenceVideosAnnotateSecurity security;
    public VideointelligenceVideosAnnotateRequest withSecurity(VideointelligenceVideosAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}