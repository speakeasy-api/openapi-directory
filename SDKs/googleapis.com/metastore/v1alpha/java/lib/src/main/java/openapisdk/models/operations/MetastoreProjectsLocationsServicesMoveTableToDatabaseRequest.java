package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest {
    public MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams pathParams;
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest withPathParams(MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseQueryParams queryParams;
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest withQueryParams(MetastoreProjectsLocationsServicesMoveTableToDatabaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveTableToDatabaseRequest request;
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest withRequest(openapisdk.models.shared.MoveTableToDatabaseRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity security;
    public MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest withSecurity(MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity security) {
        this.security = security;
        return this;
    }
}