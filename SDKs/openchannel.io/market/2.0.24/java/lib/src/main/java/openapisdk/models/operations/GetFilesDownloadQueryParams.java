package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilesDownloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fileId")
    public String fileId;
    public GetFilesDownloadQueryParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=validSeconds")
    public Long validSeconds;
    public GetFilesDownloadQueryParams withValidSeconds(Long validSeconds) {
        this.validSeconds = validSeconds;
        return this;
    }
}