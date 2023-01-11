package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeDocumentsV1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=file,json")
    public byte[][] file;
    public MergeDocumentsV1RequestBody withFile(byte[][] file) {
        this.file = file;
        return this;
    }
}