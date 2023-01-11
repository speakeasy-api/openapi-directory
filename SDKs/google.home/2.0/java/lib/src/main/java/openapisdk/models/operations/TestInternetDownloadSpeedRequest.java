package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestInternetDownloadSpeedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestInternetDownloadSpeedRequest request;
    public TestInternetDownloadSpeedRequest withRequest(openapisdk.models.shared.TestInternetDownloadSpeedRequest request) {
        this.request = request;
        return this;
    }
}