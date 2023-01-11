package openapisdk.models.operations;



public class DriveDrivesListRequest {
    public DriveDrivesListQueryParams queryParams;
    public DriveDrivesListRequest withQueryParams(DriveDrivesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveDrivesListSecurity security;
    public DriveDrivesListRequest withSecurity(DriveDrivesListSecurity security) {
        this.security = security;
        return this;
    }
}