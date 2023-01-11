package openapisdk.models.operations;



public class BooksFamilysharingGetFamilyInfoRequest {
    public BooksFamilysharingGetFamilyInfoQueryParams queryParams;
    public BooksFamilysharingGetFamilyInfoRequest withQueryParams(BooksFamilysharingGetFamilyInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksFamilysharingGetFamilyInfoSecurity security;
    public BooksFamilysharingGetFamilyInfoRequest withSecurity(BooksFamilysharingGetFamilyInfoSecurity security) {
        this.security = security;
        return this;
    }
}