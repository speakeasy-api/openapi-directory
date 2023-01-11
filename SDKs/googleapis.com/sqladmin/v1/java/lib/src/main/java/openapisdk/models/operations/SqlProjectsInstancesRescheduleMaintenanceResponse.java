package openapisdk.models.operations;



public class SqlProjectsInstancesRescheduleMaintenanceResponse {
    public String contentType;
    public SqlProjectsInstancesRescheduleMaintenanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlProjectsInstancesRescheduleMaintenanceResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlProjectsInstancesRescheduleMaintenanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}