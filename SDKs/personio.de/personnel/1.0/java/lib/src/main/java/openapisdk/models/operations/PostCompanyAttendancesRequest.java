package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompanyAttendancesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NewAttendancePeriodRequest request;
    public PostCompanyAttendancesRequest withRequest(openapisdk.models.shared.NewAttendancePeriodRequest request) {
        this.request = request;
        return this;
    }
}