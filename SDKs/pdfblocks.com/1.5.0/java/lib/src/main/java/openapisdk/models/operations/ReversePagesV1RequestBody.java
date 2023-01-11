package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReversePagesV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ReversePagesV1RequestBodyFile file;
    public ReversePagesV1RequestBody withFile(ReversePagesV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
}