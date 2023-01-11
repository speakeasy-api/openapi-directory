package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadInventoryRequestBodySignature {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadInventoryRequestBodySignature withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=signature")
    public String signature;
    public UploadInventoryRequestBodySignature withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}