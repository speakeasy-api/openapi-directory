package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiPdfWkhtmltopdfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WkHtmlToPdfRequestDto request;
    public PostApiPdfWkhtmltopdfRequest withRequest(openapisdk.models.shared.WkHtmlToPdfRequestDto request) {
        this.request = request;
        return this;
    }
}