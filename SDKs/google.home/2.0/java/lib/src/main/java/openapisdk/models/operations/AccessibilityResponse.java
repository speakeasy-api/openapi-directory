package openapisdk.models.operations;



public class AccessibilityResponse {
    public String contentType;
    public AccessibilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Getcurrentvalues getcurrentvalues;
    public AccessibilityResponse withGetcurrentvalues(openapisdk.models.shared.Getcurrentvalues getcurrentvalues) {
        this.getcurrentvalues = getcurrentvalues;
        return this;
    }
    public Long statusCode;
    public AccessibilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}