package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentSubmissionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DocumentSubmission request;
    public CreateDocumentSubmissionRequest withRequest(openapisdk.models.shared.DocumentSubmission request) {
        this.request = request;
        return this;
    }
}