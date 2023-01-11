package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateRequestBody {
    @SpeakeasyMetadata("multipartForm:name=filename")
    public String filename;
    public ValidateRequestBody withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source")
    public String source;
    public ValidateRequestBody withSource(String source) {
        this.source = source;
        return this;
    }
}