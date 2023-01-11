package openapisdk.models.operations;



public class BooksMyconfigSyncVolumeLicensesRequest {
    public BooksMyconfigSyncVolumeLicensesQueryParams queryParams;
    public BooksMyconfigSyncVolumeLicensesRequest withQueryParams(BooksMyconfigSyncVolumeLicensesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMyconfigSyncVolumeLicensesSecurity security;
    public BooksMyconfigSyncVolumeLicensesRequest withSecurity(BooksMyconfigSyncVolumeLicensesSecurity security) {
        this.security = security;
        return this;
    }
}