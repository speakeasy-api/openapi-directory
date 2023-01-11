package openapisdk.models.operations;



public class PostMaintenanceResponse {
    public String contentType;
    public PostMaintenanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Maintenance maintenance;
    public PostMaintenanceResponse withMaintenance(openapisdk.models.shared.Maintenance maintenance) {
        this.maintenance = maintenance;
        return this;
    }
    public Long statusCode;
    public PostMaintenanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}