package openapisdk.models.operations;



public class PutSetupV1ResourcesIdAvailabilityResponse {
    public String contentType;
    public PutSetupV1ResourcesIdAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceAvailabilityViewModel resourceAvailabilityViewModel;
    public PutSetupV1ResourcesIdAvailabilityResponse withResourceAvailabilityViewModel(openapisdk.models.shared.ResourceAvailabilityViewModel resourceAvailabilityViewModel) {
        this.resourceAvailabilityViewModel = resourceAvailabilityViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesIdAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}