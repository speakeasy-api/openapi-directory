package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public DownloadReportPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}