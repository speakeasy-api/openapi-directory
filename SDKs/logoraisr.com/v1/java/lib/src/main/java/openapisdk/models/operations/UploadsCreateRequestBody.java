package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadsCreateRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadsCreateRequestBodyFile file;
    public UploadsCreateRequestBody withFile(UploadsCreateRequestBodyFile file) {
        this.file = file;
        return this;
    }
}