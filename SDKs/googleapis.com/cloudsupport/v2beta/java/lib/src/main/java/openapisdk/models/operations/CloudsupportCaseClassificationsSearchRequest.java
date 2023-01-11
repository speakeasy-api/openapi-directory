package openapisdk.models.operations;



public class CloudsupportCaseClassificationsSearchRequest {
    public CloudsupportCaseClassificationsSearchQueryParams queryParams;
    public CloudsupportCaseClassificationsSearchRequest withQueryParams(CloudsupportCaseClassificationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudsupportCaseClassificationsSearchSecurity security;
    public CloudsupportCaseClassificationsSearchRequest withSecurity(CloudsupportCaseClassificationsSearchSecurity security) {
        this.security = security;
        return this;
    }
}