package openapisdk.models.operations;



public class BooksDictionaryListOfflineMetadataRequest {
    public BooksDictionaryListOfflineMetadataQueryParams queryParams;
    public BooksDictionaryListOfflineMetadataRequest withQueryParams(BooksDictionaryListOfflineMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksDictionaryListOfflineMetadataSecurity security;
    public BooksDictionaryListOfflineMetadataRequest withSecurity(BooksDictionaryListOfflineMetadataSecurity security) {
        this.security = security;
        return this;
    }
}