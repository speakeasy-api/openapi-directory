package openapisdk.models.operations;



public class LocalservicesAccountReportsSearchResponse {
    public String contentType;
    public LocalservicesAccountReportsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;
    public LocalservicesAccountReportsSearchResponse withGoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse(openapisdk.models.shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse) {
        this.googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse = googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;
        return this;
    }
    public Long statusCode;
    public LocalservicesAccountReportsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}