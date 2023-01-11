package openapisdk.models.operations;



public class TaxonomyClassesResponse {
    public openapisdk.models.shared.ApiClassifierTaxonomyOut apiClassifierTaxonomyOut;
    public TaxonomyClassesResponse withApiClassifierTaxonomyOut(openapisdk.models.shared.ApiClassifierTaxonomyOut apiClassifierTaxonomyOut) {
        this.apiClassifierTaxonomyOut = apiClassifierTaxonomyOut;
        return this;
    }
    public String contentType;
    public TaxonomyClassesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomyClassesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}