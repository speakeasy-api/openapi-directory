package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LifesciencesProjectsLocationsOperationsCancelRequest {
    public LifesciencesProjectsLocationsOperationsCancelPathParams pathParams;
    public LifesciencesProjectsLocationsOperationsCancelRequest withPathParams(LifesciencesProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LifesciencesProjectsLocationsOperationsCancelQueryParams queryParams;
    public LifesciencesProjectsLocationsOperationsCancelRequest withQueryParams(LifesciencesProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public LifesciencesProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public LifesciencesProjectsLocationsOperationsCancelSecurity security;
    public LifesciencesProjectsLocationsOperationsCancelRequest withSecurity(LifesciencesProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}