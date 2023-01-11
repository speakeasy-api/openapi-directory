package openapisdk.models.operations;



public class RetrieveSentryRiskDataByIdResponse {
    public String contentType;
    public RetrieveSentryRiskDataByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SentryImpactRiskObject sentryImpactRiskObject;
    public RetrieveSentryRiskDataByIdResponse withSentryImpactRiskObject(openapisdk.models.shared.SentryImpactRiskObject sentryImpactRiskObject) {
        this.sentryImpactRiskObject = sentryImpactRiskObject;
        return this;
    }
    public Long statusCode;
    public RetrieveSentryRiskDataByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}