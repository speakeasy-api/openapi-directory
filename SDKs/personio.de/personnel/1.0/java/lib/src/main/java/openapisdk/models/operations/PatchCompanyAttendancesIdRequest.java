package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCompanyAttendancesIdRequest {
    public PatchCompanyAttendancesIdPathParams pathParams;
    public PatchCompanyAttendancesIdRequest withPathParams(PatchCompanyAttendancesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAttendancePeriodRequest request;
    public PatchCompanyAttendancesIdRequest withRequest(openapisdk.models.shared.UpdateAttendancePeriodRequest request) {
        this.request = request;
        return this;
    }
}