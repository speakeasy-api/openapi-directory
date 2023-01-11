package openapisdk.models.operations;



public class PutMaintenanceIdResponse {
    public String contentType;
    public PutMaintenanceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Maintenance maintenance;
    public PutMaintenanceIdResponse withMaintenance(openapisdk.models.shared.Maintenance maintenance) {
        this.maintenance = maintenance;
        return this;
    }
    public Long statusCode;
    public PutMaintenanceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}