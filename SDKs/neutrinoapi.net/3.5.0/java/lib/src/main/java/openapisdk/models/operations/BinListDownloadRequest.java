package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinListDownloadRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public BinListDownloadRequestBody request;
    public BinListDownloadRequest withRequest(BinListDownloadRequestBody request) {
        this.request = request;
        return this;
    }
}