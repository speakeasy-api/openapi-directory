package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompanyEmployeesRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PostCompanyEmployeesRequestBody request;
    public PostCompanyEmployeesRequest withRequest(PostCompanyEmployeesRequestBody request) {
        this.request = request;
        return this;
    }
}