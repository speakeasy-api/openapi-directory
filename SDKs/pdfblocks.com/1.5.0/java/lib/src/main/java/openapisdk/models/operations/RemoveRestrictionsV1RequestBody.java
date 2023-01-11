package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRestrictionsV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public RemoveRestrictionsV1RequestBodyFile file;
    public RemoveRestrictionsV1RequestBody withFile(RemoveRestrictionsV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
}