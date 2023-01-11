package openapisdk.models.operations;



public class GetCountryResponse {
    public Object[] arrayOfCountry;
    public GetCountryResponse withArrayOfCountry(Object[] arrayOfCountry) {
        this.arrayOfCountry = arrayOfCountry;
        return this;
    }
    public String contentType;
    public GetCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetCountryResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public GetCountryResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public GetCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}