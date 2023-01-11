package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilesByIdOrUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fileIdOrUrl")
    public String fileIdOrUrl;
    public GetFilesByIdOrUrlQueryParams withFileIdOrUrl(String fileIdOrUrl) {
        this.fileIdOrUrl = fileIdOrUrl;
        return this;
    }
}