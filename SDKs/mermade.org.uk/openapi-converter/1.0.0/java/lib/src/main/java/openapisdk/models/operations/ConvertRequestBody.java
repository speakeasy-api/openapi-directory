package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertRequestBody {
    @SpeakeasyMetadata("multipartForm:name=filename")
    public String filename;
    public ConvertRequestBody withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source")
    public String source;
    public ConvertRequestBody withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=validate")
    public ConvertRequestBodyValidateEnum validate;
    public ConvertRequestBody withValidate(ConvertRequestBodyValidateEnum validate) {
        this.validate = validate;
        return this;
    }
}