package openapisdk.models.operations;



public class RetrieveSentryRiskDataResponse {
    public String contentType;
    public RetrieveSentryRiskDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SentryObjectPagingDto sentryObjectPagingDto;
    public RetrieveSentryRiskDataResponse withSentryObjectPagingDto(openapisdk.models.shared.SentryObjectPagingDto sentryObjectPagingDto) {
        this.sentryObjectPagingDto = sentryObjectPagingDto;
        return this;
    }
    public Long statusCode;
    public RetrieveSentryRiskDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}