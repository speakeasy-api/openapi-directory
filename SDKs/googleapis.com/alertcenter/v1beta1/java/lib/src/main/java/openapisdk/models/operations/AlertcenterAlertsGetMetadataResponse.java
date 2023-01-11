package openapisdk.models.operations;



public class AlertcenterAlertsGetMetadataResponse {
    public openapisdk.models.shared.AlertMetadata alertMetadata;
    public AlertcenterAlertsGetMetadataResponse withAlertMetadata(openapisdk.models.shared.AlertMetadata alertMetadata) {
        this.alertMetadata = alertMetadata;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsGetMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsGetMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}