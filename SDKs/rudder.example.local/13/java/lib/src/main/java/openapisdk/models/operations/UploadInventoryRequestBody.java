package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadInventoryRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadInventoryRequestBodyFile file;
    public UploadInventoryRequestBody withFile(UploadInventoryRequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public UploadInventoryRequestBodySignature signature;
    public UploadInventoryRequestBody withSignature(UploadInventoryRequestBodySignature signature) {
        this.signature = signature;
        return this;
    }
}