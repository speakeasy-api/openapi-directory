package openapisdk.models.operations;



public class GetApiVVersionCurrenciesRateResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesRateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesRateResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public openapisdk.models.shared.RateResponse[] rateResponses;
    public GetApiVVersionCurrenciesRateResponse withRateResponses(openapisdk.models.shared.RateResponse[] rateResponses) {
        this.rateResponses = rateResponses;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}