package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSignaturesV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public RemoveSignaturesV1RequestBodyFile file;
    public RemoveSignaturesV1RequestBody withFile(RemoveSignaturesV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
}