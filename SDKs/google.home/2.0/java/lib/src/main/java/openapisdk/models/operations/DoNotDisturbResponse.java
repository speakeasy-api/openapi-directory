package openapisdk.models.operations;



public class DoNotDisturbResponse {
    public String contentType;
    public DoNotDisturbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Getcurrentstate getcurrentstate;
    public DoNotDisturbResponse withGetcurrentstate(openapisdk.models.shared.Getcurrentstate getcurrentstate) {
        this.getcurrentstate = getcurrentstate;
        return this;
    }
    public Long statusCode;
    public DoNotDisturbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}