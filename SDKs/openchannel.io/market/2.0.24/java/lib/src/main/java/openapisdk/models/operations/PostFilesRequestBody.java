package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostFilesRequestBodyFile file;
    public PostFilesRequestBody withFile(PostFilesRequestBodyFile file) {
        this.file = file;
        return this;
    }
}