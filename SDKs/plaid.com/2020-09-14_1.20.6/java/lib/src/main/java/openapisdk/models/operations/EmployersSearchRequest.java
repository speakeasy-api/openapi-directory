package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployersSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployersSearchRequest request;
    public EmployersSearchRequest withRequest(openapisdk.models.shared.EmployersSearchRequest request) {
        this.request = request;
        return this;
    }
}