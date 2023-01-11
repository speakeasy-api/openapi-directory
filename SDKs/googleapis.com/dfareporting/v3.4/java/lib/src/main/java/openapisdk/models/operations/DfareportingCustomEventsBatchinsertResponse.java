package openapisdk.models.operations;



public class DfareportingCustomEventsBatchinsertResponse {
    public String contentType;
    public DfareportingCustomEventsBatchinsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomEventsBatchInsertResponse customEventsBatchInsertResponse;
    public DfareportingCustomEventsBatchinsertResponse withCustomEventsBatchInsertResponse(openapisdk.models.shared.CustomEventsBatchInsertResponse customEventsBatchInsertResponse) {
        this.customEventsBatchInsertResponse = customEventsBatchInsertResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCustomEventsBatchinsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}