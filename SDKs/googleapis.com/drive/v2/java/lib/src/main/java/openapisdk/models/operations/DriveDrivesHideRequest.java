package openapisdk.models.operations;



public class DriveDrivesHideRequest {
    public DriveDrivesHidePathParams pathParams;
    public DriveDrivesHideRequest withPathParams(DriveDrivesHidePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveDrivesHideQueryParams queryParams;
    public DriveDrivesHideRequest withQueryParams(DriveDrivesHideQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveDrivesHideSecurity security;
    public DriveDrivesHideRequest withSecurity(DriveDrivesHideSecurity security) {
        this.security = security;
        return this;
    }
}