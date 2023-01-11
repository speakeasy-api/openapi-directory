package openapisdk.models.operations;



public class LanguageDetectionsListRequest {
    public LanguageDetectionsListQueryParams queryParams;
    public LanguageDetectionsListRequest withQueryParams(LanguageDetectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LanguageDetectionsListSecurity security;
    public LanguageDetectionsListRequest withSecurity(LanguageDetectionsListSecurity security) {
        this.security = security;
        return this;
    }
}