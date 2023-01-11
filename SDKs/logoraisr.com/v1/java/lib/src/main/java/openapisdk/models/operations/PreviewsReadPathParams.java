package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreviewsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public PreviewsReadPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}