package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoSdfdownloadtasksCreateRequest {
    public DisplayvideoSdfdownloadtasksCreateQueryParams queryParams;
    public DisplayvideoSdfdownloadtasksCreateRequest withQueryParams(DisplayvideoSdfdownloadtasksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSdfDownloadTaskRequest request;
    public DisplayvideoSdfdownloadtasksCreateRequest withRequest(openapisdk.models.shared.CreateSdfDownloadTaskRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoSdfdownloadtasksCreateSecurity security;
    public DisplayvideoSdfdownloadtasksCreateRequest withSecurity(DisplayvideoSdfdownloadtasksCreateSecurity security) {
        this.security = security;
        return this;
    }
}