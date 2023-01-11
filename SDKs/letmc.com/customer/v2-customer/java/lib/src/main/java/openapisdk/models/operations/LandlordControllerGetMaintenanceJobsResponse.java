package openapisdk.models.operations;



public class LandlordControllerGetMaintenanceJobsResponse {
    public String contentType;
    public LandlordControllerGetMaintenanceJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordMaintenanceModel landlordMaintenanceModel;
    public LandlordControllerGetMaintenanceJobsResponse withLandlordMaintenanceModel(openapisdk.models.shared.LandlordMaintenanceModel landlordMaintenanceModel) {
        this.landlordMaintenanceModel = landlordMaintenanceModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetMaintenanceJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}