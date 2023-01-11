package openapisdk.models.operations;



public class GetMaintenanceResponse {
    public String contentType;
    public GetMaintenanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Maintenance[] maintenances;
    public GetMaintenanceResponse withMaintenances(openapisdk.models.shared.Maintenance[] maintenances) {
        this.maintenances = maintenances;
        return this;
    }
    public Long statusCode;
    public GetMaintenanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}