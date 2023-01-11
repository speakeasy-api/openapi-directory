package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public FilesVersionsPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}