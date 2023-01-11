package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesEventsRecordRequest {
    public GamesEventsRecordQueryParams queryParams;
    public GamesEventsRecordRequest withQueryParams(GamesEventsRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EventRecordRequest request;
    public GamesEventsRecordRequest withRequest(openapisdk.models.shared.EventRecordRequest request) {
        this.request = request;
        return this;
    }
    public GamesEventsRecordSecurity security;
    public GamesEventsRecordRequest withSecurity(GamesEventsRecordSecurity security) {
        this.security = security;
        return this;
    }
}