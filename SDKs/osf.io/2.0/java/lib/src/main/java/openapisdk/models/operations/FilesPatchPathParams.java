package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public FilesPatchPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}