package openapisdk.models.operations;



public class LanguageTranslationsListRequest {
    public LanguageTranslationsListQueryParams queryParams;
    public LanguageTranslationsListRequest withQueryParams(LanguageTranslationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LanguageTranslationsListSecurity security;
    public LanguageTranslationsListRequest withSecurity(LanguageTranslationsListSecurity security) {
        this.security = security;
        return this;
    }
}