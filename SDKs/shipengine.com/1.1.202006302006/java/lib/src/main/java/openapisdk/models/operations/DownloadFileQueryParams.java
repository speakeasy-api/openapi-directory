package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadFileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download")
    public String download;
    public DownloadFileQueryParams withDownload(String download) {
        this.download = download;
        return this;
    }
}