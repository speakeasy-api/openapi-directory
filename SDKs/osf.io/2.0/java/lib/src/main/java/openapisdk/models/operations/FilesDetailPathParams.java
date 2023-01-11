package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public FilesDetailPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}