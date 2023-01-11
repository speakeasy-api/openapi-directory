package openapisdk.models.operations;



public class GetCountriesResponse {
    public Object[] arrayOfCountrySummary;
    public GetCountriesResponse withArrayOfCountrySummary(Object[] arrayOfCountrySummary) {
        this.arrayOfCountrySummary = arrayOfCountrySummary;
        return this;
    }
    public String contentType;
    public GetCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetCountriesResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public GetCountriesResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public GetCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}