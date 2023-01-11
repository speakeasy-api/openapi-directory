package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OcrMultipartRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public OcrMultipartRequestBody request;
    public OcrMultipartRequest withRequest(OcrMultipartRequestBody request) {
        this.request = request;
        return this;
    }
    public OcrMultipartSecurity security;
    public OcrMultipartRequest withSecurity(OcrMultipartSecurity security) {
        this.security = security;
        return this;
    }
}