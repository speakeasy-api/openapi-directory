package openapisdk.models.operations;



public class GetQuoteImageFontSearchRequest {
    public GetQuoteImageFontSearchQueryParams queryParams;
    public GetQuoteImageFontSearchRequest withQueryParams(GetQuoteImageFontSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteImageFontSearchSecurity security;
    public GetQuoteImageFontSearchRequest withSecurity(GetQuoteImageFontSearchSecurity security) {
        this.security = security;
        return this;
    }
}