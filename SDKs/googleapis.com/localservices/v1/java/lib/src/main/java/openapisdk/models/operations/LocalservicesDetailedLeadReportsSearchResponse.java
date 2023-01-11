package openapisdk.models.operations;



public class LocalservicesDetailedLeadReportsSearchResponse {
    public String contentType;
    public LocalservicesDetailedLeadReportsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;
    public LocalservicesDetailedLeadReportsSearchResponse withGoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse(openapisdk.models.shared.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse) {
        this.googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse = googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;
        return this;
    }
    public Long statusCode;
    public LocalservicesDetailedLeadReportsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}